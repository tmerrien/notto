#!/bin/bash
# Get Qodana issues from the latest workflow run

echo "🔍 Fetching latest Qodana workflow results..."

# Get the latest workflow run ID
LATEST_RUN=$(gh run list --workflow="Qodana" --limit=1 --json=databaseId --jq='.[0].databaseId')

if [ -z "$LATEST_RUN" ]; then
    echo "❌ No Qodana workflow runs found"
    exit 1
fi

echo "📊 Latest run ID: $LATEST_RUN"

# Try to download artifacts
echo "⬇️ Downloading artifacts..."
gh run download $LATEST_RUN --name qodana-claude-analysis 2>/dev/null || echo "⚠️ No qodana-claude-analysis artifact found"

# Check for SARIF results in current directory
if [ -f "qodana.sarif.json" ]; then
    echo "✅ Found qodana.sarif.json - analyzing..."
    node scripts/extract-qodana-issues.js --count=20
else
    echo "❌ No SARIF results found"
    echo "💡 Try viewing the Qodana results directly:"
    echo "   - Qodana Cloud: https://qodana.cloud"
    echo "   - GitHub Actions: gh run view $LATEST_RUN --log"
fi
