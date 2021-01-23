#!/bin/bash

docker kill livla ; docker rm livla

docker run \
  -d -it \
  --name livla \
  --memory 2g \
  -v $(pwd)/src:/livla/src/:Z \
  -v $(pwd)/config:/livla/config/:Z \
  -v $(pwd)/node_modules:/livla/node_modules/:Z \
  -v $(pwd)/build:/livla/build/:Z \
  -p 3020:3000 \
  -p 3021:3001 \
  livla
docker exec -it livla bash