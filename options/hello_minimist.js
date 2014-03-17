#!/usr/bin/env node

var minimist = require('minimist');

var args = minimist(process.argv.slice(2));

if (args.w) {
  console.log('Hello World');
}
else if (args.n && !(typeof(args.n) == 'boolean')) {
  console.log('Hello', args.n);
}
else {
  console.log('Hello!');
}

console.log('Goodbye!');
