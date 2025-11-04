#!/bin/bash

echo "🚀 Setting up Design Token Sync Environment"
echo ""
echo "Please get your GitHub Personal Access Token from:"
echo "https://github.com/settings/tokens"
echo ""
echo "Make sure to select the 'repo' scope!"
echo ""

read -s -p "Enter your GitHub token: " GITHUB_TOKEN
echo ""

if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ No token provided. Exiting."
    exit 1
fi

echo "GITHUB_TOKEN=$GITHUB_TOKEN
TOKEN_STUDIO_REPO=christopher-milne-design/cca-design-tokens" > .env.local

echo "✅ Environment file created!"
echo ""
echo "🧪 Testing connection..."
npm run test:sync





