import express, { Router } from "express";
import serverless from "serverless-http";
import { sumNumbers } from '#utils/array.js';
import { run as day14Run } from '#lib/day-14/index.js';

function formatResult(result) {
  return `
    <h1>${result.title}</h1>
    <ui>
      <li>Part 1: ${result.part1.answer} (${result.part1.time} ms)</li>
      <li>Part 2: ${result.part2.answer} (${result.part2.time} ms)</li>
    <ui>
  `;
}

const api = express();

const router = Router();

router.get("/01", (req, res) => {
  const numbers = [5, 5, 8]
  const numberSum = sumNumbers(numbers)
  return res.send(`Day 01 - ${numberSum}`)
});

router.get("/14", (req, res) => {
  const results = day14Run();
  return res.send(formatResult(results));
});

api.use("/day/", router);

export const handler = serverless(api);
