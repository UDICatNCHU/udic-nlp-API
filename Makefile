install:
	- git clone https://github.com/UDICatNCHU/KCM.git; cd KCM; pip install -r requirements.txt
	- pip install -r requirements.txt

test:
	- python test.py