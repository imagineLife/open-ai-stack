import { configSetup, expressSetup, openAiSetup } from './setup/index.js';

async function runServer() {
  configSetup();
  openAiSetup();
  expressSetup();
}

runServer();
