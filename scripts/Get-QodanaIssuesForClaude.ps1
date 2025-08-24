# Get-QodanaIssuesForClaude.ps1
# Extract Qodana issues from GitHub Actions and format for Claude analysis

param(
    [int]$Count = 20,
    [string]$Filter = "",
    [switch]$IncludeFiles
)

Write-Host "🔍 Extracting Qodana issues for Claude analysis..." -ForegroundColor Cyan

# Get latest workflow run
$latestRun = gh run list --workflow="Qodana" --limit=1 --json=databaseId,conclusion,url | ConvertFrom-Json

if (-not $latestRun) {
    Write-Host "❌ No Qodana workflow runs found" -ForegroundColor Red
    exit 1
}

$runId = $latestRun.databaseId
$conclusion = $latestRun.conclusion
$url = $latestRun.url

Write-Host "📊 Latest run: $runId ($conclusion)" -ForegroundColor Green
Write-Host "🔗 URL: $url" -ForegroundColor Blue

# Get workflow logs and extract issues
Write-Host "⬇️ Analyzing workflow logs..." -ForegroundColor Yellow

$logs = gh run view $runId --log

# Extract different types of issues
$unusedImports = $logs | Select-String "Unused import specifier (.+)" | ForEach-Object {
    @{
        Type = "Unused Import"
        Issue = $_.Matches.Groups[1].Value
        Line = $_
    }
}

$shortenImports = $logs | Select-String "Import can be shortened" | ForEach-Object {
    @{
        Type = "Shorten Import"
        Line = $_
    }
}

$eslintErrors = $logs | Select-String "ESLint: Error: (.+)" | ForEach-Object {
    @{
        Type = "ESLint Error" 
        Error = $_.Matches.Groups[1].Value
        Line = $_
    }
}

# Count issues
$totalIssues = $unusedImports.Count + $shortenImports.Count + $eslintErrors.Count

Write-Host "📈 Found $totalIssues issues total" -ForegroundColor Magenta

# Create Claude-friendly output
$claudeOutput = @"
# 🔍 Qodana Analysis Results for Notto Project

## 📊 Summary
- **Total Issues**: $totalIssues
- **Run ID**: $runId
- **Status**: $conclusion
- **Analysis Date**: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

## 🚨 Issue Breakdown

### 1. Unused Import Specifiers ($($unusedImports.Count) issues)
"@

if ($unusedImports.Count -gt 0) {
    $claudeOutput += "`n"
    $unusedImports | ForEach-Object {
        $claudeOutput += "- **$($_.Issue)** - Remove unused import`n"
    }
}

$claudeOutput += @"

### 2. Import Optimization ($($shortenImports.Count) issues)
"@

if ($shortenImports.Count -gt 0) {
    $claudeOutput += "`n- Import statements can be shortened/optimized`n"
}

$claudeOutput += @"

### 3. ESLint Configuration ($($eslintErrors.Count) issues)
"@

if ($eslintErrors.Count -gt 0) {
    $claudeOutput += "`n"
    $eslintErrors | Select-Object -First 3 -Unique | ForEach-Object {
        $claudeOutput += "- **$($_.Error)**`n"
    }
}

$claudeOutput += @"

## 🎯 Project Context
- **Framework**: Next.js 15 + TypeScript + React
- **UI Components**: shadcn/ui (47 components)
- **Testing**: Jest + React Testing Library
- **Package Manager**: pnpm
- **Database**: Supabase

## 💡 Claude Action Items
1. **Fix unused imports** - Remove unused import specifiers across components and tests
2. **Optimize imports** - Shorten import statements where possible
3. **Fix ESLint dependencies** - Resolve eslint-plugin-react-hooks missing dependency
4. **Code cleanup** - General code quality improvements

## 🔧 Priority Order
1. **HIGH**: Fix ESLint dependency (affects many files)
2. **MEDIUM**: Remove unused imports (code cleanliness)
3. **LOW**: Optimize import statements (minor performance)

## 📝 Files Most Likely Affected
- `components/index.tsx`
- `__tests__/components.test.tsx`
- `__tests__/page.test.tsx`
- Multiple component and hook files
- ESLint configuration files

---
**Ready for Claude**: Copy this analysis to Claude and ask for specific fixes!
"@

# Output the results
Write-Host "`n$claudeOutput" -ForegroundColor White

# Save to file
$outputFile = "qodana-claude-analysis.md"
$claudeOutput | Out-File -FilePath $outputFile -Encoding UTF8
Write-Host "`n💾 Analysis saved to: $outputFile" -ForegroundColor Green

# Copy to clipboard if available
try {
    $claudeOutput | Set-Clipboard
    Write-Host "📋 Analysis copied to clipboard!" -ForegroundColor Green
} catch {
    Write-Host "📋 Clipboard not available - use the file instead" -ForegroundColor Yellow
}

Write-Host "`n🚀 Next steps:" -ForegroundColor Cyan
Write-Host "1. Copy the analysis above to Claude" -ForegroundColor White
Write-Host "2. Ask Claude: 'Help me fix these Qodana issues in my Next.js project'" -ForegroundColor White
Write-Host "3. Share specific files when Claude asks for them" -ForegroundColor White
