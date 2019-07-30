import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();

// middleware

async function responseTime(ctx: any, next: any) {
    var start = Date.now();
    await next();
    var end = Date.now();
    var ms = end - start;
    ctx.set("X-Response-Time", `${ms} ms`);
}

async function logger(ctx: any, next: any) {
    console.log(ctx);
    await next();
}

app.use(responseTime);
app.use(logger);

// routing

var router = new Router();
router
    .get("/", (ctx) => { ctx.body = "OK"; })
    .get("/time", ctx => { ctx.body = Date.now(); });

app.use(router.routes());

// server

app.listen(3000);