#!/usr/bin/env bash
set -e

name="$1"
package="$2"

# This script builds an example project (passed as $1) and then run the ic-cdk-optimizer on it.
cargo build --manifest-path="src/counter/Cargo.toml" \
    --target wasm32-unknown-unknown \
    --release \
    --package "$package"

# cargo run --manifest-path="src/counter/Cargo.toml" --bin ic-cdk-optimizer -- \
#     -o "target/wasm32-unknown-unknown/release/$package-opt.wasm" \
#     "target/wasm32-unknown-unknown/release/$package.wasm"

