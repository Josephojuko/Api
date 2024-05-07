const { exec } = require('child_process');

// Command to get the path to Node.js executable
const command = 'where node';

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error}`);
    return;
  }

  if (stderr) {
    console.error(`Command error: ${stderr}`);
    return;
  }

  // Splitting the output by line and getting the first line
  const lines = stdout.split('\n');
  const nodePath = lines[0].trim();

  console.log(`Path to Node.js: ${nodePath}`);
});
