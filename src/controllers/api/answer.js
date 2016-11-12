import { Router } from 'express';

import db from '../../db';
import logger from '../../utils/logger';

const router = new Router();

// GET /api/answer
router.get('/', (req, res) => {
    logger.info(`GET ${req.path}`);

    const index = req.query.index;
    const answer = db[index].a;

    res.status(200).json({ result: { answer } });
});

// POST /api/answer
router.post('/', (req, res) => {
    logger.info(`POST ${req.path}`);

    const index = req.body.index;
    const answer = req.body.answer;

    const isCorrect = db[index].a === answer;

    res.status(200).json({ result: { isCorrect } });
});

export default router;
