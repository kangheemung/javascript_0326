{"filter":false,"title":"test5.js","tooltip":"/test5.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":22,"column":3},"action":"insert","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！","var lines = [];","var reader = require('readline').createInterface({","  input: process.stdin,","  output: process.stdout","});","reader.on('line', (line) => {","  lines.push(line);","});","reader.on('close', () => {","  const N = parseInt(lines[0]);","  const A = lines[1].split(' ').map(Number);","  const B = lines[2].split(' ').map(Number);","","  const combinedArr = [...new Set([...A, ...B])];","  const sortedArr = combinedArr.sort((a, b) => a - b);","","  console.log(sortedArr.join(' '));","","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":22,"column":3},"end":{"row":22,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1712035617431,"hash":"ff58199f1007bd44f0f7e570e51c25bc4e32ae2a"}