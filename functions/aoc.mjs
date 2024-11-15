import express from "express";
import serverless from "serverless-http";
import { sumNumbers } from '#utils/array.js';
import template from '#utils/template.js';
import { run as day14Run } from '#lib/day-14/index.js';

const sidebar = `
  <a class="link" href="/">Home</a>
  <a class="link" href="/day/14">Day 14</a>
`;

function formatResult(result) {
  return `
    <h1>${result.title}</h1>
    <ui>
      <li>Part 1: ${result.part1.answer} (${result.part1.time} ms)</li>
      <li>Part 2: ${result.part2.answer} (${result.part2.time} ms)</li>
    <ui>`;
}

const api = express();

api.get("/", (req, res) => {
  const body = `
  <section class="homepage-body message -left">
    <img src="public/dave-pixel.png">
    <div class="nes-balloon from-left is-dark">
      <h1>Welcome to Dave Follett's Advent of Code Solutions.</h1>
      <p>Click each link in the sidebar to run each day's solution.</p>
    </div>
  </section>`

  return res.send(template(body, sidebar));
});

api.get("/day/14", (req, res) => {
  const results = day14Run();
  res.send(template(formatResult(results), sidebar));
});

api.all('*', (req, res) => {
  return res.send("4040404040404040")
});

export const handler = serverless(api);
