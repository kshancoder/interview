import typescriptLogo from "~/vanilla-counter/typescript.svg";
import { setupCounter } from "~/vanilla-counter/counter.ts";

import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="h-full flex justify-center items-center">
    <div class="flex flex-col justify-center items-center gap-2">
      <a class="text-[#646cff] hover:text-[#535bf2]" href="https://www.typescriptlang.org/" target="_blank">
        <img 
            src="${typescriptLogo}" 
            class="h-[6em] p-[1.5em] will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" 
            alt="TypeScript logo" />
      </a>
      
      <h1 class="text-3xl">Vite + TypeScript</h1>
      
      <div class="p-[2em]">
        <button
          class="rounded-md border border-transparent px-[1.2em] py-[0.6em] bg-[#f9f9f9] hover:border-gray-700 focus:outline-[4px]" 
          id="counter"
          type="button"
        />
      </div>
      
      <p class="text-[#888]">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
