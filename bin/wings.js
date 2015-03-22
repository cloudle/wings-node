#!/usr/bin/env node

var _ = require('lodash');
var program = require('commander');
var package = require('../package.json');

// make `-v` option case-insensitive
process.argv = _.map(process.argv, function(arg) {
    return (arg === '-v') ? '-V' : arg;
});

program
    .version(package.name+" "+package.version)
    .command('install [name]', 'install one or more packages')
    .parse(process.argv)