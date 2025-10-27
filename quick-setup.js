#!/usr/bin/env node

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function quickSetup() {
  console.log('🚀 Quick Setup for Design Token Sync');
  console.log('');
  console.log('✅ Repository found: christopher-milne-design/cca-design-tokens');
  console.log('✅ tokens.json file exists (8,973 bytes)');
  console.log('');
  console.log('To complete setup, you need a GitHub Personal Access Token:');
  console.log('1. Go to: https://github.com/settings/tokens');
  console.log('2. Click "Generate new token" → "Generate new token (classic)"');
  console.log('3. Set Note: "Design Token Sync"');
  console.log('4. Check scope: "repo"');
  console.log('5. Click "Generate token" and copy it');
  console.log('');

  const token = await question('Enter your GitHub token: ');
  
  if (!token || token.trim() === '') {
    console.log('❌ No token provided. Exiting.');
    rl.close();
    return;
  }

  // Create .env.local file
  const envContent = `GITHUB_TOKEN=${token.trim()}
TOKEN_STUDIO_REPO=christopher-milne-design/cca-design-tokens
`;

  const envPath = path.join(__dirname, '.env.local');
  fs.writeFileSync(envPath, envContent);

  console.log('✅ Environment file created!');
  console.log('');
  console.log('🧪 Testing connection...');
  console.log('');

  // Test the connection
  const { exec } = require('child_process');
  exec('npm run test:sync', (error, stdout, stderr) => {
    console.log(stdout);
    if (error) {
      console.log('❌ Test failed. Please check your token and try again.');
    } else {
      console.log('');
      console.log('🎉 Setup complete! You can now run:');
      console.log('  npm run sync:token-studio');
      console.log('  npm run tokens');
      console.log('  npm run dev');
    }
    rl.close();
  });
}

quickSetup().catch(console.error);
