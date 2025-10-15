use std::str::FromStr;
use anyhow::anyhow;
use ::anyhow::Result;
use ::js_sys::BigInt as JsBigInt;
use ::num_bigint::BigInt;


pub fn _to_num_bigint(js_bigint: JsBigInt) -> Result<BigInt> {
    let result = js_bigint.to_string(16);
    let js_str = match result {
        Ok(ok) => ok,
        Err(err) => {
            let msg: String = err.message().into();
            return Err(anyhow!(msg));
        },
    };
    let str: String = js_str.into();
    let bigint = BigInt::from_str(&str)?;
    Ok(bigint)
}
