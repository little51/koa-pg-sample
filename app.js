'use strict' ;

//koa app
const Koa = require('koa');
global.app = new Koa();
//load db
global.dbpool = require('./db');
//config route
require('./routers') ; 
//start listen
app.listen(3000);
console.log("hbi server listen on 3000")