let timeout = 100;
const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write('\r' + char + '   ');
  }, timeout);
  timeout += 200;
}

setTimeout(() => {
  console.log();
}, timeout);
