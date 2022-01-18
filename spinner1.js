process.stdout.write('hello from spinner1.js... \rheyyy\n');

let timeout = 100;
const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

// loop through every character in spinner animation
// write each character on top of the last iteration
// increase timeout for next iteration
for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write('\r' + char + '   ');
  }, timeout);
  timeout += 200;
}

// write newline with final timeout value
setTimeout(() => {
  console.log();
}, timeout);
