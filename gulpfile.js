var coffee = require('coffee-script'); coffee.register();

var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });