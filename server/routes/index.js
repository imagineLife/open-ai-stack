import openApiHandlerRouter from './open-api/index.js';

export default function registerRoutes(app) {
  const routes = [
    {path: "/open-api", handler: openApiHandlerRouter}
  ]

  routes.forEach(({path, handler}) => app.use(path, handler))
}