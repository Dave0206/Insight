const { spawn } = require('child_process');
const path = require('path');

const services = [
  { name: 'gateway', script: 'gateway.js', cwd: __dirname },
  { name: 'auth-service', script: 'index.js', cwd: path.join(__dirname, 'services', 'auth-service') },
  { name: 'user-service', script: 'index.js', cwd: path.join(__dirname, 'services', 'user-service') },
  { name: 'post-service', script: 'index.js', cwd: path.join(__dirname, 'services', 'post-service') },
  { name: 'comment-service', script: 'index.js', cwd: path.join(__dirname, 'services', 'comment-service') },
  { name: 'reaction-service', script: 'index.js', cwd: path.join(__dirname, 'services', 'reaction-service') },
  { name: 'notification-service', script: 'index.js', cwd: path.join(__dirname, 'services', 'notification-service') },
  { name: 'chat-service', script: 'index.js', cwd: path.join(__dirname, 'services', 'chat-service') },
  { name: 'admin-service', script: 'index.js', cwd: path.join(__dirname, 'services', 'admin-service') }
];

services.forEach(service => {
  console.log(`Starting ${service.name}...`);
  const child = spawn('node', [service.script], {
    cwd: service.cwd,
    stdio: 'inherit',
    shell: true
  });

  child.on('error', (err) => {
    console.error(`Failed to start ${service.name}:`, err);
  });

  child.on('exit', (code) => {
    console.log(`${service.name} exited with code ${code}`);
  });
});
