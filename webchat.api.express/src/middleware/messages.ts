import express from 'express';

const sse = require('sse-nodejs');

const router = express.Router();
import {Clients} from '../types/clients';

const clients = Clients.getInstance();

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
        clients.broadcast(userMessage.message, userMessage.userIndex);
        res
            .status(200)
            .end();
    })
    .get('/sse', async (req, res) => {

        let app = sse(res, {heartbeat : true});

        let clientId = clients.generateClientId();
        clients.add(clientId, app);

        app.disconnect(() => clients.remove(clientId));
    });

export default router;
