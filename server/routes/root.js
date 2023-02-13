import express from 'express';
const rootRouter = express.Router();

export default function rootRouterFn() {
  console.log('a');
  rootRouter.get('/', (req, res) => {
    console.log('b');
    return res.send('this works!?');
  });
  rootRouter.post('/', (req, res) => {
    console.log('c');
    return res.send('this works!?');
  });
  return rootRouter;
}

export { rootRouter as rootRouter };
