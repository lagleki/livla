#!/bin/bash

docker kill livla ; docker rm livla
docker build --no-cache -f ./dev/Dockerfile-dev -t livla .

docker run \
  -it \
  --name livla \
  --memory 4g \
  -v $(pwd)/src:/livla/src/:Z \
  -v $(pwd)/config:/livla/config/:Z \
  -v $(pwd)/build:/livla/build/:Z \
  -p 3020:3000 \
  -p 3021:3001 \
  livla /bin/bash
