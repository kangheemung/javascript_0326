{"filter":false,"title":"test1.js","tooltip":"/test1.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":22,"column":3},"action":"insert","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！","var lines = [];","var reader = require('readline').createInterface({","  input: process.stdin,","  output: process.stdout","});","reader.on('line', (line) => {","  lines.push(line);","});","reader.on('close', () => {"," const S =parseInt(lines[0],10)"," const isConvertible = /^[0-9]*$/.test(S);"," "," if (isConvertible) {","    console.log(\"YES\");","} else {","    console.log(\"NO\");","}","","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":22,"column":3},"end":{"row":22,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1711585841556,"hash":"9045e3639e5f58a5cc49dc2a438354b6d1c42234"}