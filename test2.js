process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
//!isNaN(s)は、与えられた引数がNaN（非数）でない場合にtrueを返すJavaScriptの関数です。

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
const s = lines[0].trim();

if (!isNaN(s)) {
    console.log("YES");
} else {
    console.log("NO");
}
});