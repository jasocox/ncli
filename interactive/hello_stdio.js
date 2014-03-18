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

if (!options.name && !options.world) {
  stdio.question('Would you like to say hello to someone specific?',
                 ['y', 'n'], function(err, answer) {
    if (answer === 'y') {
      stdio.question('And who would that be?', function(err, answer) {
        hello_name(answer);
        return
      });
    }
    else {
      hello_world();
      return
    }
  });
}

if (options.name) {
  hello_name(options.name);
}
else if (options.world) {
  hello_world();
}

function hello_name(name) {
  console.log('Hello', name);
}

function hello_world() {
  console.log('Hello World');
}
