FROM ubuntu:rolling

RUN apt-get update

RUN apt-get install -y build-essential software-properties-common curl

RUN apt-get install -y python3 python3-dev python3-pip nodejs npm

# RUN useradd -ms /bin/bash app
COPY . /livla
WORKDIR /livla
# USER app
RUN npm i
CMD npm start
