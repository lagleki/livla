FROM ubuntu:latest

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Etc/UTC

RUN apt-get update

RUN apt-get install -y build-essential software-properties-common curl vim

RUN apt-get install -y python3 python3-dev

# get install script and pass it to execute: 
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
# and install node 
RUN apt-get install nodejs

RUN apt-get install -y rsync

RUN mkdir -p /livla/build/dumps
COPY src/package*.json /livla/
COPY src/tsconfig.json /livla/
WORKDIR /livla
RUN npm i ; npm i -g npm-check-updates pm2@latest typescript
CMD ["pm2-runtime", "/livla/src/livla/index.js"]
