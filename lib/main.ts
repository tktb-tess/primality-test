import _init, { foo } from './wasm/rust_wasm';

export const initWasm = async () => {
    await _init();
    return { foo };
};
