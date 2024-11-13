import express, { Router } from "express";
import serverless from "serverless-http";
import { sumNumbers } from './src/utils/array.js';

const api = express();

const router = Router();
router.get("/01", (req, res) => {
  const numbers = [5, 5, 8]
  const numberSum = sumNumbers(numbers)
  return res.send(`Day 01 - ${numberSum}`)
});
router.get("/02", (req, res) => res.send("Day 02"));

api.use("/day/", router);

export const handler = serverless(api);
