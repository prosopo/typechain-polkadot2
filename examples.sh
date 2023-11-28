#!/bin/bash

set +e
docker compose --file ./docker-compose.substrate-contracts-node.yml up -d
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

kill $P1