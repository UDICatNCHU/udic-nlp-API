import requests, urllib
with open('issue.txt', 'r', encoding='utf8') as f:
	for i in f:
		print(i)
		i = i.strip()
		url = 'http://140.120.13.243:32782/api/kemApi/?keyword={}&lang=cht'.format(urllib.parse.quote(i))
		print(url)
		re = requests.get(url)
		# print(re.text)
		# print('finish')