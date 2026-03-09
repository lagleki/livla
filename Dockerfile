FROM docker.io/library/ubuntu:latest

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Etc/UTC

RUN apt-get update

RUN apt-get install -y build-essential software-properties-common curl vim

RUN apt-get install -y python3 python3-dev

# get install script and pass it to execute:
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
RUN apt-get install -y nodejs

RUN apt-get install -y rsync

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN mkdir -p /livla/build/dumps
COPY src/package.json src/pnpm-lock.yaml /livla/
COPY src/tsconfig.json /livla/
WORKDIR /livla
RUN pnpm install --frozen-lockfile

# Install pm2 so container can be run with: pm2-runtime /livla/src/livla/index.js
RUN npm install -g pm2

CMD ["node", "/livla/src/livla/index.js"]
