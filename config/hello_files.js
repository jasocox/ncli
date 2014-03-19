#!/usr/bin/env node

var jf = require('jsonfile'),
    fs = require('fs');

var required = 'required_config.json',
    optional = 'optional_config.json';

if (!fs.existsSync(required)) {
  console.log('You can\'t do anything without the required config file');
  process.exit(1);
}

var config = jf.readFileSync(required);

console.log('Read the config file:', config);

var optional_config;
if (fs.existsSync(optional)) {
  optional_config = jf.readFileSync(optional);
  console.log('Read the optional config file:', optional_config);
}
