import { Router } from 'express';
import assign from 'lodash/assign';
import sample from 'lodash/sample';
import range from 'lodash/range';
import toNumber from 'lodash/toNumber';

import db from '../../db';
import logger from '../../utils/logger';

const router = new Router();

// GET /api/question
router.get('/', (req, res) => {
    logger.info(`GET ${req.path}`);

    const previousIndex = toNumber(req.query.previousIndex) || null;
    let nextIndex;

    logger.info('previousIndex: ', previousIndex);

    if (!previousIndex) nextIndex = sample(range(0, db.length));
    else {
        nextIndex = previousIndex;
        while (nextIndex === previousIndex) {
            nextIndex = sample(range(0, db.length));
        }
    }

    const nextQuestion = db[nextIndex].q;
    logger.info('next question: ', JSON.stringify(nextQuestion));

    res.status(200).json({ result:
        assign({}, {
            question: nextQuestion,
            index: nextIndex
        })
    });
});

export default router;
