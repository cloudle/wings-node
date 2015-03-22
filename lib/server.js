//require('better-require')();
var coffee = require('coffee-script'); coffee.register();
var koa = require('koa'),
    app = koa()

var core = require('./core/core');
//core.print("yay!");
app.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function *(){
    this.body = 'Hello World';
});

console.log("Wings is flying..")
app.listen(3000);