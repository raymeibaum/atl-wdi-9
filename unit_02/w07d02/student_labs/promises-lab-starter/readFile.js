'use strict';
const fs = require('fs');
let inFile = process.argv[2];

var promiseToReadTheFile = new Promise(function(resolve, reject) {
  fs.readFile(inFile, { encoding: 'utf8' }, function(error, content) {
    error ? reject(error) : resolve(content);
  });
});

promiseToReadTheFile
.then(function(fromResolve) {
  let lines = fromResolve.split('\n');
  return lines;
})
.then(function(lines) {
  lines.pop();
  return lines;
})
.then(function(lines){
  lines.forEach(function(line) {
    console.log('Hello, ' + line + '!');
  });
})
.catch(function(fromReject) {
  console.error(fromReject);
});
