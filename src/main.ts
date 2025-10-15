import { add, initWasm } from 'vite-wasm-template';

await initWasm();

console.log(add(2n, 3n));
