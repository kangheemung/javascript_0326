process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const N = parseInt(lines[0]);
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
    }});
    