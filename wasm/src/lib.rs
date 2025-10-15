use js_sys::BigInt as JsBigInt;
use js_sys::JsString;
use wasm_bindgen::prelude::*;
mod bigint;

#[wasm_bindgen]
pub fn foo(v: JsBigInt) -> JsString {
    v.to_string(16).unwrap()
}
