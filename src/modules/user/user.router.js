import { Router } from 'express';
import * as userController from './user.controller.js';

const router = Router();

router.route('/test').get(userController.userTest);

export default router;
