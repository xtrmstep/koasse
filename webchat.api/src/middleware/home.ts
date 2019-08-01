import Router from 'koa-router';

const router = new Router();

export default () => {
    router
        .get('/', async (ctx) => {
            ctx.body = "alive!";
        });
    return router.middleware();
};
