import express from 'express';
import chatHandler from './chat/index.js';
import imgHandler from './img/index.js';
const openApiRouter = express.Router();

const openApiRoutes = [
  {
    path: '/chat',
    handler: chatHandler,
  },
  {
    path: '/img',
    handler: imgHandler,
  },
];

openApiRoutes.forEach(({ path, handler }) => openApiRouter.use(path, handler));

export default openApiRouter;
