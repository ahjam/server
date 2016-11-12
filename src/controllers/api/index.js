import { Router } from 'express';

import answerCtrl from './answer';
import questionCtrl from './question';

const router = new Router();

router.use('/answer', answerCtrl);
router.use('/question', questionCtrl);

export default router;
