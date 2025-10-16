import { initWasm } from '../lib/main';

Object.defineProperty(window, 'initWasm', {
  value: initWasm,
  enumerable: true,
});

export {};
