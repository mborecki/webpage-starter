#!/bin/bash

if [ -d "./build" ]; then
    rm -r ./build
fi

# main directory
mkdir build

# copy files
cp -R ./app/* ./build

# clear source files
find ./build -type f -name *.scss | xargs rm
find ./build -type f -name *.es6.js | xargs rm
