import express from 'express';

const app = express();

app
    .get('/', (req, res) => {
        res.send('The sedulous hyena ate the antelope!');
    });

app.listen(3001);
console.log('alive!');
