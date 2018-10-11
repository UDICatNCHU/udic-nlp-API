# This dockerfile uses the ubuntu image
# VERSION 2 - EDITION 1
# Author: davidtnfsh
# Command format: Instruction [arguments / command] ..

FROM davidtnfsh/mysql:0.2
MAINTAINER davidtnfsh davidtnfsh@gmail.com

ENV LANG=C.UTF-8

RUN apt-get update && apt-get install -y --no-install-recommends \
		wget \
		python3 \
		python3-pip \
		procps \
		python3-numpy \
		python3-scipy \
		libblas-dev \
		liblapack-dev \
		liblapacke-dev \
		gfortran \
		libxml2-dev \
		libxslt-dev \
		python-dev \
		python3-dev \
		build-essential \
		libssl-dev \
		libffi-dev \
		libxml2-dev \
		libxslt1-dev \
		zlib1g-dev \
		python-pip \
	&& pip3 install --no-cache-dir setuptools \
	&& apt-get clean \
	&& rm -rf /var/lib/apt/lists/* /tmp/*
RUN pip3 install kcem