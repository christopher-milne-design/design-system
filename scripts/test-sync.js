#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local if it exists
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
      process.env[key] = value;
    }
  });
  console.log('✅ Loaded environment variables from .env.local');
} else {
  console.log('⚠️  No .env.local file found');
}

// Check environment variables
console.log('\n🔍 Environment Check:');
console.log(`GITHUB_TOKEN: ${process.env.GITHUB_TOKEN ? '✅ Set' : '❌ Missing'}`);
console.log(`TOKEN_STUDIO_REPO: ${process.env.TOKEN_STUDIO_REPO || 'christopher-milne-design/cca-design-tokens (default)'}`);

if (!process.env.GITHUB_TOKEN) {
  console.log('\n💡 To fix this, run: npm run setup:env');
  process.exit(1);
}

// Test GitHub API access
const https = require('https');

function testGitHubAccess() {
  return new Promise((resolve, reject) => {
    const repo = process.env.TOKEN_STUDIO_REPO || 'christopher-milne-design/cca-design-tokens';
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${repo}`,
      method: 'GET',
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        'User-Agent': 'Token-Sync-Test',
        'Accept': 'application/vnd.github.v3+json',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode === 200) {
          const repoInfo = JSON.parse(data);
          console.log(`✅ Repository access confirmed: ${repoInfo.full_name}`);
          console.log(`   Description: ${repoInfo.description || 'No description'}`);
          console.log(`   Private: ${repoInfo.private ? 'Yes' : 'No'}`);
          resolve(true);
        } else if (res.statusCode === 404) {
          console.log(`❌ Repository not found: ${repo}`);
          console.log('   Check that the repository name is correct and exists');
          reject(new Error('Repository not found'));
        } else if (res.statusCode === 401) {
          console.log(`❌ Authentication failed`);
          console.log('   Check that your GitHub token is valid and has the correct permissions');
          reject(new Error('Authentication failed'));
        } else {
          console.log(`❌ GitHub API error: ${res.statusCode}`);
          console.log(`   Response: ${data}`);
          reject(new Error(`API error: ${res.statusCode}`));
        }
      });
    });

    req.on('error', (error) => {
      console.log(`❌ Network error: ${error.message}`);
      reject(error);
    });

    req.end();
  });
}

// Test tokens.json file access
function testTokensFile() {
  return new Promise((resolve, reject) => {
    const repo = process.env.TOKEN_STUDIO_REPO || 'christopher-milne-design/cca-design-tokens';
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${repo}/contents/tokens.json`,
      method: 'GET',
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        'User-Agent': 'Token-Sync-Test',
        'Accept': 'application/vnd.github.v3+json',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode === 200) {
          const fileInfo = JSON.parse(data);
          console.log(`✅ tokens.json file found`);
          console.log(`   Size: ${fileInfo.size} bytes`);
          console.log(`   Last modified: ${new Date(fileInfo.last_modified).toLocaleString()}`);
          resolve(true);
        } else if (res.statusCode === 404) {
          console.log(`❌ tokens.json file not found in repository`);
          console.log('   Make sure the file exists in the repository root');
          reject(new Error('tokens.json not found'));
        } else {
          console.log(`❌ Error accessing tokens.json: ${res.statusCode}`);
          console.log(`   Response: ${data}`);
          reject(new Error(`File access error: ${res.statusCode}`));
        }
      });
    });

    req.on('error', (error) => {
      console.log(`❌ Network error: ${error.message}`);
      reject(error);
    });

    req.end();
  });
}

// Run tests
async function runTests() {
  try {
    console.log('\n🧪 Testing GitHub API access...');
    await testGitHubAccess();
    
    console.log('\n🧪 Testing tokens.json file access...');
    await testTokensFile();
    
    console.log('\n🎉 All tests passed! Your setup looks good.');
    console.log('\n💡 You can now run: npm run sync:token-studio');
    
  } catch (error) {
    console.log(`\n❌ Test failed: ${error.message}`);
    process.exit(1);
  }
}

runTests();
