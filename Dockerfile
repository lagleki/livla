FROM alpine:latest

RUN apk add --no-cache bash
RUN apk add --update nodejs npm
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

RUN mkdir /livla ; mkdir /livla/build ; mkdir /livla/build/dumps
COPY src/package*.json /livla/
WORKDIR /livla
RUN npm i ; npm i -g npm-check-updates

CMD npm start