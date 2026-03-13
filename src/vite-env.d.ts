/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: Element[];
    lines: Element[];
    words: Element[];
    constructor(target: gsap.DOMTarget, vars?: Record<string, unknown>);
    revert(): void;
  }
}
