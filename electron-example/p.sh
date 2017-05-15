#!/bin/bash

electron-packager . example --icon=img/icon --overwrite --prune=true --ignore=src --ignore=public  --out=./dist/ --asar=true

