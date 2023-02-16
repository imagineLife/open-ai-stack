import { Configuration, OpenAIApi } from 'openai';
import state from '../state.js';
import { debuglog } from 'util';
const debugThis = debuglog('openaisetup')

/*
  - builds openAI object
  - * * * STORES * * * the object in global state
*/
export default function setupOpenAi() {
  const cfg = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(cfg);
  state.openAi.library = openai;
  debugThis('OpenAi setup Complete');
}
