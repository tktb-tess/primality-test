import { initWasm } from '@tktb-tess/primality-test';

const { from_bin, to_bin } = await initWasm();

console.log(BigInt(from_bin(Uint8Array.from([0xfc, 0xff]))));

console.log(to_bin((-129n).toString()));
