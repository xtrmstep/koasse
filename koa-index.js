var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

app.use(router.routes());

async function responseTime(ctx, next) {
    var start = Date.now();
    await next();
    var end = Date.now();
    var ms = end - start;
    ctx.set("X-Response-Time", `${ms} ms`);
}

async function logger(ctx, next) {
    console.log(ctx);
    await next();
}

app.use(responseTime);
app.use(logger);

app.use(async (ctx) => {
    ctx.body = "OK";
});

app.listen(3000);