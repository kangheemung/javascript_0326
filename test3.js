process.stdin.resume();
process.stdin.setEncoding('utf8');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];
rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  const N = parseInt(lines[0], 10);
  const A = lines[1].split(' ').map(Number);

  for (let i = 1; i < N; i++) {
    const currentValue = A[i];
    let found = false;

    for (let j = 0; j < i; j++) {
      if (A[j] === currentValue) {
        found = true;
        break;
      }
    }

    if (found) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
});
