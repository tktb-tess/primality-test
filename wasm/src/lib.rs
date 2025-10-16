use wasm_bindgen::prelude::*;
mod bigint;
use num_bigint::BigInt;

#[wasm_bindgen()]
pub fn mod_pow(base: &[u8], exponent: &[u8], modulo: &[u8]) -> Vec<u8> {
    let b_bigint = BigInt::from_signed_bytes_le(base);
    let p_bigint = BigInt::from_signed_bytes_le(exponent);
    let m_bigint = BigInt::from_signed_bytes_le(modulo);
    b_bigint.modpow(&p_bigint, &m_bigint).to_signed_bytes_le()
}