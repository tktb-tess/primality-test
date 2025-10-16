const calcByteLen = (n: bigint) => {
  const isNeg = n < 0n;
  if (isNeg) n *= -1n;
  const binStr = n.toString(2);
  const length = binStr.length;
  // -2^(8n-1) 型の数のみバイト長を1引く
  const excep = n === 1n << (BigInt(length) - 1n) && isNeg && !(length & 7);
  const ans = Math.floor(length / 8) + 1;
  return excep ? ans - 1 : ans;
};

const bigintToU8Array = (bigint: bigint) => {
  const byteLen = calcByteLen(bigint);

  bigint = BigInt.asUintN(8 * byteLen, bigint);

  const u8Arr = new Uint8Array(byteLen);

  for (let i = 0; i < byteLen; ++i) {
    const byte = Number(bigint & 255n);
    u8Arr[i] = byte;
    bigint >>= 8n;
  }

  return u8Arr;
};

const u8ArrayToBigint = (u8Arr: Uint8Array) => {
  const byteLen = u8Arr.length;
  let bigint = 0n;
  for (let i = 0; i < byteLen; ++i) {
    const byte = BigInt(u8Arr[i]) << (8n * BigInt(i));
    bigint += byte;
  }

  bigint = BigInt.asIntN(8 * byteLen, bigint);
  return bigint;
};

export const initWasm = async () => {
  const { default: _init, mod_pow } = await import('./wasm/rust_wasm');
  await _init();

  const modPow = (base: bigint, exponent: bigint, mod: bigint) => {
    return u8ArrayToBigint(
      mod_pow(
        bigintToU8Array(base),
        bigintToU8Array(exponent),
        bigintToU8Array(mod)
      )
    );
  };

  return { modPow };
};
