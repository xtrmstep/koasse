import express from 'express';

const router = express.Router();

router
    .get('/', async (req, res) => {
        res.send("alive!");
    });

export default router;
