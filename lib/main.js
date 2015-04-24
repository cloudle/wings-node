var coffee = require('coffee-script'); coffee.register();

var core = require('./core/core');
var db = require('./core/database');
var wings = require('./core/wings');

console.log(wings.uuid());