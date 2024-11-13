import express, { Router } from "express";
import serverless from "serverless-http";
import { sumNumbers } from '../src/utils/array.js';

const api = express();

const router = Router();
router.get("/", (req, res) => {
  const numbers = [2, 3, 4]
  const numberSum = sumNumbers(numbers)
  return res.send(`Home - ${numberSum}`)
});

api.use("/", router);

export const handler = serverless(api);
