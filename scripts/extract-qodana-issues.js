#!/usr/bin/env node

/**
 * Extract Qodana issues from SARIF file for Claude analysis
 * Usage: node scripts/extract-qodana-issues.js [--filter=category] [--count=N]
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const filterCategory = args.find(arg => arg.startsWith('--filter='))?.split('=')[1];
const maxCount = parseInt(args.find(arg => arg.startsWith('--count='))?.split('=')[1] || '20');

function extractQodanaIssues() {
  const sarifPath = path.join(process.cwd(), 'qodana.sarif.json');
  
  if (!fs.existsSync(sarifPath)) {
    console.error('❌ qodana.sarif.json not found. Run Qodana scan first.');
    process.exit(1);
  }

  const sarif = JSON.parse(fs.readFileSync(sarifPath, 'utf8'));
  const run = sarif.runs[0];
  const results = run.results || [];

  if (results.length === 0) {
    console.log('✅ No issues found in Qodana report!');
    return;
  }

  console.log(`📊 Found ${results.length} total issues in Qodana report\\n`);

  // Group issues by category/rule
  const issuesByRule = {};
  const issuesByFile = {};

  results.forEach((result, index) => {
    const ruleId = result.ruleId || 'Unknown';
    const message = result.message?.text || 'No description';
    const location = result.locations?.[0];
    const filePath = location?.physicalLocation?.artifactLocation?.uri || 'Unknown file';
    const lineNumber = location?.physicalLocation?.region?.startLine || 0;
    
    // Skip if filtering and doesn't match
    if (filterCategory && !ruleId.toLowerCase().includes(filterCategory.toLowerCase())) {
      return;
    }

    // Group by rule
    if (!issuesByRule[ruleId]) {
      issuesByRule[ruleId] = [];
    }
    issuesByRule[ruleId].push({
      message,
      file: filePath,
      line: lineNumber,
      index: index + 1
    });

    // Group by file
    if (!issuesByFile[filePath]) {
      issuesByFile[filePath] = [];
    }
    issuesByFile[filePath].push({
      ruleId,
      message,
      line: lineNumber,
      index: index + 1
    });
  });

  // Display summary
  console.log('🔍 **ISSUE SUMMARY BY RULE:**\\n');
  Object.entries(issuesByRule)
    .sort(([,a], [,b]) => b.length - a.length)
    .slice(0, 10)
    .forEach(([rule, issues]) => {
      console.log(`**${rule}**: ${issues.length} issues`);
    });

  console.log('\\n📁 **TOP FILES WITH ISSUES:**\\n');
  Object.entries(issuesByFile)
    .sort(([,a], [,b]) => b.length - a.length)
    .slice(0, 10)
    .forEach(([file, issues]) => {
      console.log(`**${file}**: ${issues.length} issues`);
    });

  // Generate Claude-friendly format
  console.log('\\n\\n🤖 **CLAUDE ANALYSIS FORMAT:**\\n');
  console.log('```json');
  
  const claudeFormat = {
    project: 'Notto - Universal UI Component Library',
    totalIssues: results.length,
    topIssues: Object.entries(issuesByRule)
      .sort(([,a], [,b]) => b.length - a.length)
      .slice(0, maxCount)
      .map(([rule, issues]) => ({
        rule,
        count: issues.length,
        examples: issues.slice(0, 3).map(issue => ({
          file: issue.file,
          line: issue.line,
          message: issue.message
        }))
      })),
    fileBreakdown: Object.entries(issuesByFile)
      .sort(([,a], [,b]) => b.length - a.length)
      .slice(0, 10)
      .map(([file, issues]) => ({
        file,
        count: issues.length,
        rules: [...new Set(issues.map(i => i.ruleId))]
      }))
  };

  console.log(JSON.stringify(claudeFormat, null, 2));
  console.log('```');

  // Generate specific issues for fixing
  console.log('\\n\\n🔧 **DETAILED ISSUES FOR FIXING:**\\n');
  
  Object.entries(issuesByRule)
    .sort(([,a], [,b]) => b.length - a.length)
    .slice(0, 5) // Top 5 most common issues
    .forEach(([rule, issues]) => {
      console.log(`\\n### ${rule} (${issues.length} occurrences)\\n`);
      
      issues.slice(0, 5).forEach(issue => {
        console.log(`**File**: \`${issue.file}\` (Line ${issue.line})`);
        console.log(`**Issue**: ${issue.message}\\n`);
      });
    });
}

extractQodanaIssues();
