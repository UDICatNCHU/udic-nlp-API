install:
	# - git clone https://github.com/UDICatNCHU/KCM.git; cd KCM; make install
	- pip3 install -r requirements.txt

test:
	- python test.py