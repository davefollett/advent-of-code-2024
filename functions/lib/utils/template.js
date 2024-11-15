export default function template(body, sidebar) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Dave Follett's 2024 Advent of Code</title>
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
    <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />

    <style>

      html, body, pre, code, kbd, samp {
        font-family: 'Press Start 2P', cursive;
        background-color: #212529;
      }
      
      .grid {
        display: grid;
        grid-template-columns: 200px auto;
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
        max-width: 56em;
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
<html>
`;
}
