import express from 'express';

const router = express.Router();
import {Clients} from '../types/clients';

//const clients = Clients.getInstance();

interface UserMessage {
    userIndex : any;
    message: any;
}

router
    .get('/', async (req, res) => {
        res.send("return all messages");
    })
    .post('/', async (req, res) => {
        const userMessage : UserMessage = req.body;
        console.log(userMessage);
        //clients.broadcast(userMessage.message, userMessage.userIndex);
        res
            .status(200)
            .end();
    })
    .get('/sse', async (req, res) => {

        console.log(req);
        /*et clientId = clients.generateClientId();
        clients.add(clientId, ctx.sse);

        ctx.sse.on('close', () => clients.remove(clientId));

        ctx.status = 200;*/
    });

export default router;
