#!/bin/bash

docker kill livla ; docker rm livla

docker run \
  -it \
  --name livla \
  --memory 5g \
  --log-opt max-size=20k --log-opt max-file=1 \
  -v $(pwd)/src:/livla/src/:Z \
  -v $(pwd)/config:/livla/config/:Z \
  -v $(pwd)/build:/livla/build/:Z \
  -p 3020:3000 \
  -p 3021:3001 \
  livla
