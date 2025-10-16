import { initWasm } from '../lib/main';

const { modPow } = await initWasm();

Object.defineProperty(window, '_X_', {
  value: { modPow },
  enumerable: true,
});

export {};
