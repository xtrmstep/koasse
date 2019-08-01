import Router from 'koa-router';
import {Clients} from '../types/clients';

const router = new Router();
const clients = Clients.getInstance();

interface UserMessage {
    userIndex : any;
    message: any;
}

export default () => {
    router
        .get('/', async (ctx) => {
            ctx.body = "return all messages";
        })
        .post('/', async (ctx) => {
            const userMessage : UserMessage = ctx.request.body;
            console.log(userMessage);
            clients.broadcast(userMessage.message, userMessage.userIndex);
        })
        .get('/sse', async (ctx) => {

            let clientId = clients.generateClientId();
            clients.add(clientId, ctx.sse);

            ctx.sse.on('close', () => clients.remove(clientId));

            ctx.status = 200;
        });
    return router.middleware();
};
