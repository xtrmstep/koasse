import Router from 'koa-router';
import { protobufParser, protobufSender } from 'koa-protobuf';
import messages from '../protos/bundle.js';

const router = new Router();

export default () => {
    router
        .get('/', async (ctx) => {
            ctx.proto = messages.SampleMessage.create({
                example_field: 'alive!'
            });
        });
    return router.middleware();
};
