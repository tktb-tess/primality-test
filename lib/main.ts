import _init, { from_bin, to_bin } from './wasm/rust_wasm';

export const initWasm = async () => {
    await _init();
    return { from_bin, to_bin };
};
