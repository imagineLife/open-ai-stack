import rootRouterFn from './root/index.js';

export default function registerRoutes(app) {
  
  app.use('/open-api', rootRouterFn)
}