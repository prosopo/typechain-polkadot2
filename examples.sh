#!/bin/bash

set +e
docker run -p 9944:9944 -p 9933:9933 -p 9615:9615 -p 30333:30333 -v $(pwd)/chain-data:/chain-data --rm -d --name substrate prosopo/substrate-contracts-node:v0.29
sleep 10
set -e

for dir in examples/*; do
  if [ -d "$dir" ]; then
    cd $dir
    echo "Processing $dir"
    npm i
    npm run generate
    npm run start
    cd ../..
  fi
done