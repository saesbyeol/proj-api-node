import express from 'express';
import body_parser from 'body-parser';

import { get_informations } from '../../controllers/city.controller.js';

const router = express.Router();
router.use(body_parser.json());

router.get('/:name', get_informations)

export default router;