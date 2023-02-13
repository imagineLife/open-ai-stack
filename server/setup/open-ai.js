import { Configuration, OpenAIApi } from 'openai';
import state from '../state.js';

/*
  - builds openAI object
  - * * * STORES * * * the object in global state
*/
export default function setupOpenAi() {
  const cfg = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(cfg);
  state.openai = openai;
}
