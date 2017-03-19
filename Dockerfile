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
RUN git clone https://github.com/UDICatNCHU/udic-nlp-API.git
WORKDIR udic-nlp-API
RUN pip3 install -r requirements.txt

# the port on which we will be running app server (django runserver / gunicorn)
EXPOSE 8000

# 建立新容器時要執行的指令
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]

ENTRYPOINT [""]