import Koa from 'koa';

import mount from 'koa-mount';
import logger from 'koa-logger';
import cors from '@koa/cors';
import koaBody from 'koa-body';
import koaSSE from 'koa-event-stream';
import { protobufParser, protobufSender } from 'koa-protobuf';

import home from './middleware/home';
import messages from './middleware/messages';

const app = new Koa();

app.use(logger());
app.use(cors());
// app.use(koaBody({jsonLimit: '1kb'}));
app.use(protobufSender());
app.use(koaSSE());

app.use(mount('/', home()));
app.use(mount('/messages', messages()));

export default app;
