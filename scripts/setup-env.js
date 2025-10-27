#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function setupEnvironment() {
  console.log('🚀 Setting up Design Token Sync Environment\n');

  const githubToken = await question('Enter your GitHub Personal Access Token: ');
  const tokenStudioRepo = await question('Enter your Token Studio repository name (default: christopher-milne-design/cca-design-tokens): ') || 'christopher-milne-design/cca-design-tokens';

  if (!githubToken) {
    console.log('❌ GitHub token is required');
    process.exit(1);
  }

  // Create .env.local file
  const envContent = `# Token Studio Design Token Sync
GITHUB_TOKEN=${githubToken}
TOKEN_STUDIO_REPO=${tokenStudioRepo}
`;

  const envPath = path.join(__dirname, '..', '.env.local');
  fs.writeFileSync(envPath, envContent);

  console.log('\n✅ Environment variables saved to .env.local');
  console.log('\n📋 Next steps:');
  console.log('1. Run: npm run sync:token-studio');
  console.log('2. Run: npm run tokens');
  console.log('3. Run: npm run dev');
  console.log('\n🔧 To set up GitHub Actions:');
  console.log('1. Go to your GitHub repository settings');
  console.log('2. Navigate to Secrets and Variables > Actions');
  console.log('3. Add the following secrets:');
  console.log(`   - GITHUB_TOKEN: ${githubToken}`);
  console.log(`   - TOKEN_STUDIO_REPO: ${tokenStudioRepo}`);

  rl.close();
}

setupEnvironment().catch(console.error);
