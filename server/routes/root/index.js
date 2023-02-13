import express from 'express';
import getHandler from './get.js'
import postHandler from './post.js';
const rootRouter = express.Router();

rootRouter.route('/').get(getHandler).post(postHandler);

export default rootRouter;
