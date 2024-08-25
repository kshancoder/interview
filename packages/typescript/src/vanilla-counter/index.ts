import typescriptLogo from "~/vanilla-counter/typescript.svg";
import { setupCounter } from "~/vanilla-counter/counter.ts";

import "~/vanilla-counter/style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
 
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
