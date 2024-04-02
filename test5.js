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
  const B = lines[2].split(' ').map(Number);

  const combinedArr = [...new Set([...A, ...B])];
  const sortedArr = combinedArr.sort((a, b) => a - b);

  console.log(sortedArr.join(' '));

});