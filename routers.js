'use strict';

var Router = require('koa-router');
var router = new Router();

router.get('/overview', require('./services/overviewService').overviewService.queryToday);

app.use(router.routes());
