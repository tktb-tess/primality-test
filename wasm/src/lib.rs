use std::str::FromStr;
use wasm_bindgen::prelude::*;
mod bigint;
use num_bigint::BigInt;

#[wasm_bindgen()]
pub fn from_bin(v: &[u8]) -> String {
    let bigint = BigInt::from_signed_bytes_le(v);
    bigint.to_str_radix(10)
}

#[wasm_bindgen]
pub fn to_bin(v: &str) -> Vec<u8> {
    let bigint = BigInt::from_str(v).unwrap();
    bigint.to_signed_bytes_le()
}
