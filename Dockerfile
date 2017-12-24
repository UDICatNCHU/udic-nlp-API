# This dockerfile uses the ubuntu image
# VERSION 2 - EDITION 1
# Author: davidtnfsh
# Command format: Instruction [arguments / command] ..

# 基本映像檔，必須是第一個指令
FROM davidtnfsh/python

MAINTAINER davidtnfsh davidtnfsh@gmail.com

ENV LANG=C.UTF-8

# 更新映像檔的指令
RUN mkdir /code
WORKDIR /code
ADD . /code/

# to install numpy, scipy
RUN apt-get update
RUN apt-get -y install libblas-dev liblapack-dev libatlas-base-dev gfortran

# to install npm
RUN apt-get -y install curl python-software-properties
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get -y install nodejs sudo

RUN npm install
RUN npm install -g bower
RUN pip3 install -r requirements.txt

RUN ./node_modules/.bin/webpack --config webpack.config.index.js
RUN ./node_modules/.bin/webpack --config webpack.config.api.js
RUN ./node_modules/.bin/webpack --config webpack.config.member.js
RUN git clone https://github.com/UDICatNCHU/KCM.git; cd KCM; python3 setup.py install