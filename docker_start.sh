podman run -d \
  --restart unless-stopped \
  -it \
  --name livla \
  --mount type=bind,source="$(pwd)"/build,target=/livla/build \
  -p 3020:3020 \
  livla