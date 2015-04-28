var coffee = require('coffee-script'); coffee.register();
require('node-cjsx').transform(); //require('node-jsx').install();

require('./server/index');