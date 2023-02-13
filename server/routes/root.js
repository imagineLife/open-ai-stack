import express from 'express';
const rootRouter = express.Router();

function getHandler(req, res) {
  return res.send('get works!');
}

function postHandler(req, res) {
  return res.send('post works!?');
}
rootRouter.route('/').get(getHandler).post(postHandler);

export default rootRouter;
