// This script is used by Vercel to build the application
const { execSync } = require('child_process');

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Build the application
console.log('Building application...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Build completed successfully!');
