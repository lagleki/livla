#!/bin/bash

podman kill livla
podman rm livla

podman run \
  -it \
  --name livla \
  --mount type=bind,source="$(pwd)"/build,target=/livla/build \
  -p 3020:3000 \
  livla
