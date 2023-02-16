import { debuglog } from 'util';
import * as dotenv from 'dotenv';
const debugThis = debuglog('configsetup')

export default function configSetup() { 
  dotenv.config();
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('This Requires an API key for openAI.');
  }
  
  debugThis('Config setup Complete')
}