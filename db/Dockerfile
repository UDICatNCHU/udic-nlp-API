# This dockerfile uses the ubuntu image
# VERSION 2 - EDITION 1
# Author: davidtnfsh
# Command format: Instruction [arguments / command] ..

FROM mysql:5.7.22
MAINTAINER davidtnfsh davidtnfsh@gmail.com

ENV LANG=C.UTF-8

RUN apt-get update
RUN apt-get -y install wget python3 python3-pip procps python3-numpy python3-scipy

# for numpy scipy
# RUN apt-get -y install libxml2
RUN apt-get -y install libblas-dev liblapack-dev liblapacke-dev gfortran libxml2-dev libxslt-dev
RUN apt-get -y install python-dev python3-dev \
     build-essential libssl-dev libffi-dev \
     libxml2-dev libxslt1-dev zlib1g-dev \
     python-pip

RUN pip3 install kcem