#!/usr/bin/env node

var Table = require('cli-table');

var table = new Table({
  head: ['Heading 1', 'Heading 2'],
  colWidths: [25, 25]
});

table.push(
  ['Row 1, item 1', 'Row 1, item 2'],
  ['Row 2, item 1', 'Row 2, item 2']
);

console.log(table.toString());
