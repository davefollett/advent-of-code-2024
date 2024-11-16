export default function template(body, sidebar, title) {
  return `
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://aoc2024.davefollett.dev/">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="Welcome to Dave Follett's 2024 Advent of Code Solutions!">
    <meta property="og:image" content="https://aoc2024.davefollett.dev/public/dave-pixel.png">
    <meta property="og:image:type" content="image/png" /> 
    <meta property="og:image:width" content="175" /> 
    <meta property="og:image:height" content="175" />

    <title>${title}</title>
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
    <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />

    <style>

      html, body, pre, code, kbd, samp {
        font-family: 'Press Start 2P', cursive;
        background-color: #212529;
      }
      
      .grid {
        display: grid;
        grid-template-columns: 225px auto;
        grid-gap: 1em;
      }

      header, footer {
        grid-column: 1 / 3;
      }

      @media all and (max-width: 800px) {
        aside,
        main {
          grid-column: 1 / 3;
        }
      }

      body {
        margin: 0 auto;
        max-width: 64rem;
        padding: 1em 0;
      }

      header,
      aside,
      main,
      footer {
        display: flex;
        justify-content: center;
        align-items: stretch;
      }

      .cell {
        flex: 1;
      }

      .homepage-body {
        display: flex;
        justify-content: left;
        align-items: end;
        gap: 1rem;
      }

      .footer-row {
        display: flex;
        justify-content: left;
        align-items: center;
      }

      .footer-icons {
        margin-left: auto;
      }
    </style>
  </head>

  <body>
    <div class="grid">
        <header>
          <div class="cell nes-container is-dark">
            <h1>2024 Advent of Code</h1>
          </div>
          <div class="nes-container" style="background-color: white;">
            <a class="link" href="https://github.com/davefollett/advent-of-code-2024" target="_blank" title="Fork me on GitHub">
              <i id="octocat" class="nes-octocat"></i>
            </a>
          </div>
        </header>
      
        <aside>
          <div class="cell nes-container is-dark">
            ${sidebar}
          </div>
        </aside>
      
        <main>
          <div class="cell nes-container is-dark">
              <p>${body}</p>
            </div>
        </main>
      
        <footer>
          <div class="footer-row cell nes-container is-dark">
            <p>&copy; 2024 Dave Follett</p>
            <div class="footer-icons">
              <a class="link" href="https://github.com/davefollett/" target="_blank">
                <i class="nes-icon github is-medium"></i>
              </a>
              <a class="link" href="https://www.linkedin.com/in/dfollett/" target="_blank">
                <i class="nes-icon linkedin is-medium"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
  </body>
  <script>
      const element = document.getElementById("octocat");

      element.addEventListener("mouseenter", () => {
        element.classList.add("animate");
      });

      element.addEventListener("mouseleave", () => {
        element.classList.remove("animate");
      });
    </script>
<html>
`;
}
