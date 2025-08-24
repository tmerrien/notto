Write-Host "🔍 Extracting Qodana issues for Claude..." -ForegroundColor Cyan

# Get latest workflow run
$latestRun = gh run list --workflow="Qodana" --limit=1 --json=databaseId,conclusion | ConvertFrom-Json

if (-not $latestRun) {
    Write-Host "❌ No Qodana workflow runs found" -ForegroundColor Red
    exit 1
}

$runId = $latestRun.databaseId
Write-Host "📊 Analyzing run: $runId" -ForegroundColor Green

# Get specific issues from logs
$logs = gh run view $runId --log

$unusedImports = ($logs | Select-String "Unused import specifier").Count
$shortenImports = ($logs | Select-String "Import can be shortened").Count  
$eslintErrors = ($logs | Select-String "ESLint: Error:").Count

$totalIssues = $unusedImports + $shortenImports + $eslintErrors

$analysis = @"
# 🔍 Qodana Analysis for Claude - Notto Project

## 📊 Issue Summary
- **Total Issues Found**: $totalIssues
- **Workflow Run**: $runId

## 🚨 Breakdown by Type:

### 1. Unused Import Specifiers: $unusedImports issues
**Examples from logs**:
- Unused import specifier 'useState' in components/index.tsx
- Unused import specifier 'screen' in __tests__/page.test.tsx  
- Unused import specifier 'DialogTrigger' in components/index.tsx

### 2. Import Optimization: $shortenImports issues  
**Issue**: Import statements can be shortened in __tests__/components.test.tsx

### 3. ESLint Configuration: $eslintErrors issues
**Main Error**: Cannot find module 'eslint-plugin-react-hooks'
**Impact**: Affects many TypeScript/React files across the project

## 🎯 Project Context
- **Framework**: Next.js 15 + TypeScript + React
- **UI Library**: shadcn/ui (47 components)
- **Testing**: Jest + React Testing Library
- **Package Manager**: pnpm
- **Database**: Supabase

## 🔧 Priority Fixes Needed:
1. **HIGH**: Install missing eslint-plugin-react-hooks dependency
2. **MEDIUM**: Remove unused imports (useState, screen, DialogTrigger) 
3. **LOW**: Optimize import statements where possible

## 💡 Claude Request:
"Help me fix these Qodana code quality issues in my Next.js/TypeScript project. Focus on the eslint-plugin-react-hooks dependency issue first, then help clean up the unused imports."

---
**Next**: Copy this to Claude for detailed fixes!
"@

Write-Host $analysis
Write-Host "`n💾 Saving analysis..." -ForegroundColor Yellow

$analysis | Out-File -FilePath "qodana-analysis.md" -Encoding UTF8
Write-Host "✅ Saved to qodana-analysis.md" -ForegroundColor Green

Write-Host "`n🚀 Ready for Claude integration!" -ForegroundColor Cyan
