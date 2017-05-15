#!/bin/bash

rm -Rf ./stage
mkdir -p ./stage/main/public

./node_modules/.bin/webpack
cd main/public
cp -r * ../../stage/main/public/
cd ../..
cp ./main/runtime.json ./stage/package.json
babel main/*.js --out-dir stage
cd stage
yarn install
cd ..
