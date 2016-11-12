import { Router } from 'express';

import apiCtrl from './api';
import logger from '../utils/logger';

const router = Router();

router.get('/', (req, res) => {
    logger.info('controllers', 'GET', req.path);
    res.render('index');
});

router.use('/api', apiCtrl);

export default router;
