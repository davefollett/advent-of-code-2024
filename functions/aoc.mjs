import express from "express";
import serverless from "serverless-http";
import template from '#utils/template.js';
import { run as day01Run } from '#lib/day-01/index.js';
import { run as day02Run } from '#lib/day-02/index.js';
import { run as day03Run } from '#lib/day-03/index.js';
import { run as day04Run } from '#lib/day-04/index.js';
import { run as day06Run } from '#lib/day-06/index.js';
import { run as day09Run } from '#lib/day-09/index.js';

const sidebar = `
  <a class="link" href="/"><button type="button" class="nes-btn is-primary">Home</button></a>
  <a class="link" href="/day/01"><button type="button" class="nes-btn is-success">Day 01</button></a>
  <a class="link" href="/day/02"><button type="button" class="nes-btn is-success">Day 02</button></a>
  <a class="link" href="/day/03"><button type="button" class="nes-btn is-success">Day 03</button></a>
  <a class="link" href="/day/04"><button type="button" class="nes-btn is-success">Day 04</button></a>
  <a class="link" href="/day/06"><button type="button" class="nes-btn is-success">Day 06</button></a>
  <a class="link" href="/day/09"><button type="button" class="nes-btn is-success">Day 09</button></a>
`;

function formatResult(result) {
  return `
    <h1>${result.title}</h1>
    <ul>
      <li>Part 1: ${result.part1.answer} (${result.part1.time} ms)</i></li>
      <li>Part 2: ${result.part2.answer} (${result.part2.time} ms)</li>
    </ul>`;
}

const api = express();

api.get("/", (req, res) => {
  const title = "Dave Follett's 2024 Advent of Code.";
  const body = `
  <section class="homepage-body message -left">
    <img src="public/dave-pixel.png" width="175px" height="175px" alt="Pixelated image of Dave Follett">
    <div class="nes-balloon from-left is-dark">
      <h1>Welcome to Dave Follett's <a href="https://adventofcode.com/" target="_blank" title="Advent of Code website">Advent of Code</a> Solutions.</h1>
      <p>Click each link in the sidebar to run each day's solution.</p>
    </div>
  </section>
  <div style="margin-top: 1rem;">
    <i class="nes-icon is-medium star"></i>
    <i class="nes-icon is-medium star"></i>
    <i class="nes-icon is-medium star"></i>
    <i class="nes-icon is-medium star"></i>
    <i class="nes-icon is-medium star"></i>
    <i class="nes-icon is-medium star"></i>
    <i class="nes-icon is-medium star"></i>
    <i class="nes-icon is-medium star"></i>
    <i class="nes-icon is-medium star"></i>
    <i class="nes-icon is-medium star"></i>
  </div>`

  return res.send(template(body, sidebar, title));
});

api.get("/day/01", (req, res) => {
  const title = "AOC 2024 - Day 01";
  const results = day01Run();
  res.send(template(formatResult(results), sidebar, title));
});

api.get("/day/02", (req, res) => {
  const title = "AOC 2024 - Day 02";
  const results = day02Run();
  res.send(template(formatResult(results), sidebar, title));
});

api.get("/day/03", (req, res) => {
  const title = "AOC 2024 - Day 03";
  const results = day03Run();
  res.send(template(formatResult(results), sidebar, title));
});

api.get("/day/04", (req, res) => {
  const title = "AOC 2024 - Day 04";
  const results = day04Run();
  res.send(template(formatResult(results), sidebar, title));
});

api.get("/day/06", (req, res) => {
  const title = "AOC 2024 - Day 06";
  const results = day06Run();
  res.send(template(formatResult(results), sidebar, title));
});

api.get("/day/09", (req, res) => {
  const title = "AOC 2024 - Day 09";
  const results = day09Run();
  res.send(template(formatResult(results), sidebar, title));
});

api.all('*', (req, res) => {
  const body = `
  <section class="homepage-body message -left">
    <img style="transform: rotate(180deg);" src="/public/dave-pixel.png" alt="Pixelated image of Dave Follett">
    <div class="nes-balloon from-left is-dark">
      <h1>Oops, this page does not exist!</h1>
      <p>Click each link in the sidebar to run each day's solution.</p>
    </div>
  </section>`

  return res.send(template(body, sidebar));
});

export const handler = serverless(api);
