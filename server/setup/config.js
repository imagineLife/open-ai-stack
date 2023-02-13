import * as dotenv from 'dotenv';

export default function configSetup() { 
  dotenv.config();
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('This Requires an API key for openAI.');
  }
}