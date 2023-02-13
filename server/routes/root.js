import express from 'express';
const rootRouter = express.Router();

rootRouter.get('/', (req, res) => {
  console.log('b');
  return res.send('this works!?');
});
rootRouter.post('/', (req, res) => {
  console.log('c');
  return res.send('this works!?');
});

export default rootRouter;
