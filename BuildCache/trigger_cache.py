import requests, urllib
import random
#!/usr/bin/python3
import threading


with open('new.txt', 'r', encoding='utf8') as f:
	fileList = list(i.split()[0]
		for i in f
	)

def random_list():
    for index, value in enumerate(fileList):
      ran = random.randrange(index + 2)
      fileList[ran], fileList[index] = value, fileList[ran]
    return fileList

def ping(threadName):
	for i in random_list():
		i = i.split()[0]
		print(threadName, i)
		url = 'http://api.udic.cs.nchu.edu.tw/api/kcem/?keyword={}&lang=cht&kcm={}&kem={}'.format(urllib.parse.quote(i), 30, 50)
		re = requests.get(url)
		print(re.text)

class myThread (threading.Thread):
    def __init__(self, name):
        threading.Thread.__init__(self)
        self.name = name

    def run(self):
        print ("Starting " + self.name)
        ping(self.name)
        print ("Exiting " + self.name)

# Create new threads
thread1 = myThread("Thread-1")
thread2 = myThread("Thread-2")
thread3 = myThread("Thread-3")
thread4 = myThread("Thread-4")
thread5 = myThread("Thread-5")
thread6 = myThread("Thread-6")
thread7 = myThread("Thread-7")
thread8 = myThread("Thread-8")
thread9 = myThread("Thread-9")

# Start new Threads
thread1.start()
thread2.start()
thread3.start()
thread4.start()
thread5.start()
thread6.start()
thread7.start()
thread8.start()
thread9.start()
thread1.join()
thread2.join()
thread3.join()
thread4.join()
thread5.join()
thread6.join()
thread7.join()
thread8.join()
thread9.join()
print ("Exiting Main Thread")