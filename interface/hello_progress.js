#!/usr/bin/env node

var progress = require('progress');

var bar = new progress(':bar', { total: 50 });

var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 200);
