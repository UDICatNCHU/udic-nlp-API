useradd -ms /bin/bash newuser
chown -R newuser:newuser .
# 因為bower不允許使用root執行，所以這邊切換使用者
sudo -u newuser -H sh -c "python3 /udic-nlp-API/manage.py bower install"
python3 manage.py buildkem
python3 manage.py makemigrations
python3 manage.py migrate