import express from "express";
import serverless from "serverless-http";
import { sumNumbers } from '#utils/array.js';
import template from '#utils/template.js';
import { run as day14Run } from '#lib/day-14/index.js';

const sidebar = `
  <a class="link" href="/">Home</a>
  <a class="link" href="/day-01">Day 01</a>
  <a class="link" href="/day-02">Day 02</a>
  <a class="link" href="/day-03">Day 03</a>
  <a class="link" href="/day-04">Day 04</a>
  <a class="link" href="/day-05">Day 05</a>
  <a class="link" href="/day-06">Day 06</a>
  <a class="link" href="/day-07">Day 07</a>
  <a class="link" href="/day-08">Day 08</a>
  <a class="link" href="/day-10">Day 10</a>
  <a class="link" href="/day-11">Day 11</a>
  <a class="link" href="/day-14">Day 14</a>
  <a class="link" href="/day-15">Day 15</a>
`;

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

api.get("/", (req, res) => {
  res.send(template(`<h1>Welcome to Dave Follett's Advent of Code Solutions.</h1>
    <p>Click each link in the sidebar to run each day's solution.</p>`, sidebar));
});

api.get("/day-14", (req, res) => {
  const results = day14Run();
  res.send(template(formatResult(results), sidebar));
});

api.get("/day/07", (req, res) => {
  const numbers = [2, 3, 4]
  const numberSum = sumNumbers(numbers)
  return res.send(`DAY 07 - ${numberSum}`)
});

api.all('*', function(req, res) {
  return res.send("4040404040404040")
});

export const handler = serverless(api);
