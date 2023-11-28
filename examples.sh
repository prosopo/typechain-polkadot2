#!/bin/bash

set +e
substrate-contracts-node --tmp --dev & P1=$!;
set -e

for dir in examples/*; do
  if [ -d "$dir" ]; then
    cd $dir
    echo "Processing $dir"
    npm
    npm generate
    npm start
    cd ../..
  fi
done

kill $P1