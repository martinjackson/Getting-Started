#!/bin/bash

DIR=$(pwd)
STAGE=$DIR/stage
rm -Rf $STAGE
mkdir -p ./stage/main/public

./node_modules/.bin/webpack
cd main/public
cp -r * ../../stage/main/public/
cd $DIR
cp ./main/runtime.json ./stage/package.json
./node_modules/.bin/babel main/*.js --out-dir ./stage
cd stage
yarn install
cd ..
