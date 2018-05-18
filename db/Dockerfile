# This dockerfile uses the ubuntu image
# VERSION 2 - EDITION 1
# Author: davidtnfsh
# Command format: Instruction [arguments / command] ..

FROM mysql
MAINTAINER davidtnfsh davidtnfsh@gmail.com

ENV LANG=C.UTF-8

RUN apt update
RUN apt -y install wget python3 pyhton3-pip procps

RUN pip3 install kcem