import express from 'express';
import cors from 'cors';
import registerRoutes from './../routes/index.js'

export default function setupExpress() { 
  const expressObj = express();
  expressObj.use(cors());
  expressObj.use(express.json());
  registerRoutes(expressObj)
  expressObj.listen(2345, () => {
    console.log(`open ai server up & running!`)
  })
}