import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import home from './middleware/home';
import messages from './middleware/messages';

const app = express();

// middleware
app.use(bodyParser.json());
app.use(morgan('combined'));

// routing
app.use('/', home);
app.use('/messages', messages);

export default app;
