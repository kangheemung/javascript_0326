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
 const S =parseInt(lines[0],10)
 const isConvertible = /^[0-9]*$/.test(S);
 
 if (isConvertible) {
    console.log("YES");
} else {
    console.log("NO");
}

});