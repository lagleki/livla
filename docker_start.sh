#!/bin/bash

docker kill livla ; docker rm livla

docker run \
  -it \
  --name livla \
  --memory 1g \
  -v $(pwd)/src:/livla/src/:Z \
  -v $(pwd)/config:/livla/config/:Z \
  -v $(pwd)/build:/livla/build/:Z \
  -p 3020:3000 \
  livla
