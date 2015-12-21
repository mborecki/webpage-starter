#!/bin/bash

if [ -d "./build" ]; then
    rm -r ./build
fi

# main directory
mkdir build

# start file
cp ./app/app.js ./build

# api
cp -R ./app/api ./build/api

# page
cp -R ./app/page ./build/page

# clear source files
find ./build -type f -name *.scss | xargs rm
find ./build -type f -name *.es6.js | xargs rm
