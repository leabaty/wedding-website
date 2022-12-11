import express from 'express';

import { getGifts, updateGift } from '../controllers/weddingGifts.js';
import { saveParticipation } from '../controllers/participation.js';
import { emailRecap } from '../controllers/emailRecap.js';

const router = express.Router();

router.post('/saveParticipation', saveParticipation);
router.get('/getGifts', getGifts);
router.patch('/updateGift/:id', updateGift);
router.post('/sendEmail', emailRecap);

export default router;
