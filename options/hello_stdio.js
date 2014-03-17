#!/usr/bin/env node

var stdio = require('stdio');

var options = stdio.getopt({
  'name': {key: 'n', args: 1, description: 'Who to say hello to'},
  'world': {key: 'w', description: 'Say hello to everyone in the world'},
  'help': {key: 'h'}
});

if (options.help) {
  options.printHelp();
  return
}

if (options.name && options.world) {
  console.log('Error: You can\'t say hello to a person and the whole world at the same time, silly');
  options.printHelp();
  return 1
}

if (options.name) {
  console.log('Hello', options.name);
}
else if (options.world) {
  console.log('Hello World');
}
else {
  console.log('Hello!');
}

console.log('Goodbye!');
