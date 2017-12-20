# This dockerfile uses the ubuntu image
# VERSION 2 - EDITION 1
# Author: docker_user
# Command format: Instruction [arguments / command] ..

# 基本映像檔，必須是第一個指令
FROM davidtnfsh/python

# 維護者： docker_user <docker_user at email.com> (@docker_user)
MAINTAINER davidtnfsh davidtnfsh@gmail.com

ENV LANG=C.UTF-8

# 更新映像檔的指令
RUN mkdir /code
WORKDIR /code
ADD . /code/
# RUN git clone https://github.com/UDICatNCHU/udic-nlp-API.git
# WORKDIR udic-nlp-API
RUN apt-get update

# to install numpy, scipy
RUN apt-get -y install libblas-dev liblapack-dev libatlas-base-dev gfortran

# to install npm
RUN apt-get -y install curl python-software-properties
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get -y install nodejs

RUN npm install
RUN npm install -g bower
RUN pip3 install -r requirements.txt
RUN python3 manage.py buildkem
RUN python3 manage.py makemigrations
RUN python3 manage.py migrate

RUN ./node_modules/.bin/webpack --config webpack.config.index.js
RUN ./node_modules/.bin/webpack --config webpack.config.api.js
RUN ./node_modules/.bin/webpack --config webpack.config.member.js

# 因為bower不允許使用root執行，所以這邊切換使用者
RUN useradd -ms /bin/bash newuser
RUN chown -R newuser:newuser .
USER newuser
RUN python3 /udic-nlp-API/manage.py bower install
USER root

# the port on which we will be running app server (django runserver / gunicorn)

EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]