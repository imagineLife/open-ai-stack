import rootRouterFn from './root.js';

export default function registerRoutes(app) {
  
  app.use('/open-api', rootRouterFn)
}