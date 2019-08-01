import Router from 'koa-router';

const router = new Router();

export default () => {
    router
        .get('/', async (ctx) => {
            ctx.body = "return all messages";
        })
        /*.get('/:id', async (ctx, next) => {
            ctx.body = "return some message";
        })*/
        .post('/', async (ctx) => {
            const body = ctx.request.body;
            console.log(body);
            ctx.body = "posted a message";
        })
        .get('/sse', async (ctx) => {
            let n = 0;
            const interval = setInterval(() => {
                ctx.sse.send(new Date().toString());
                n++;
                if (n >= 5) {
                    ctx.sse.end();
                    clearInterval(interval);
                }
            }, 1000);
            ctx.sse.on("finish", () => clearInterval(interval));
        });
    return router.middleware();
};
