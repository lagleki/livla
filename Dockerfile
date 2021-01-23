FROM ubuntu:rolling

RUN apt-get update

RUN apt-get install -y build-essential software-properties-common curl

RUN apt-get install -y python3 python3-dev python3-pip nodejs npm

RUN apt-get install -y rsync

RUN mkdir -p /livla/build/dumps
COPY src/package*.json /livla/
WORKDIR /livla
RUN npm i ; npm i -g npm-check-updates

CMD npm start