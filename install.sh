npm install
npm install -g bower
./node_modules/.bin/webpack --config webpack.config.index.js
./node_modules/.bin/webpack --config webpack.config.api.js
./node_modules/.bin/webpack --config webpack.config.member.js

useradd -ms /bin/bash newuser
chown -R newuser:newuser .
# 因為bower不允許使用root執行，所以這邊切換使用者
sudo -u newuser -H sh -c "python3 /code/manage.py bower install"

if [ "${1}" == "kem" ]; then
	python3 manage.py buildkem
	python3 manage.py makemigrations
	python3 manage.py migrate
	exit 0
elif [ "${1}" == "kcm" ]; then
	echo "build kcm"；
	exit 0
else
	echo "no additional command"
	exit 0
fi