import express from 'express';
import bodyParser from 'body-parser';
import home from './middleware/home';
import messages from './middleware/messages';

const app = express();

app.use(bodyParser.json());
app.use('/', home);
app.use('/messages', messages);

export default app;
