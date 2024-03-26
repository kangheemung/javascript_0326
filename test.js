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
   const S = lines[0].trim().split('/');

S.forEach(time => {
    const [year, month, day, hours, minutes] = time.split(':');
    if (year !== undefined) {
      console.log(year);
    }
    if (month !== undefined) {
      console.log(month);
    }
    if (day !== undefined) {
      console.log(day);
    }
    if (hours !== undefined) {
      console.log(hours);
    }
    if (minutes !== undefined) {
      console.log(minutes);
    }
  });});