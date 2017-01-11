# -*- coding: utf-8 -*-
from django.http import JsonResponse
from djangoApiDec.djangoApiDec import queryString_required
from KCM.KCM import KCM
from KCM.build.import2DB import import2Mongo
from KEM.KEM import KEM
import os

@queryString_required(['lang', 'keyword'])
def kcmApi(request):
	"""Generate list of term data source files
	Returns:
		if contains invalid queryString key, it will raise exception.
	"""
	keyword = request.GET['keyword']
	lang = request.GET['lang']

	i = import2Mongo(lang, 'mongodb://140.120.13.243:27017/')
	result = i.get(keyword, int(request.GET['num']) if 'num' in request.GET else 10)
	return JsonResponse(result, safe=False)

@queryString_required(['lang', 'keyword'])
def kemApi(request):
	"""Generate list of term data source files
	Returns:
		if contains invalid queryString key, it will raise exception.
	"""
	keyword = request.GET['keyword']
	lang = request.GET['lang']
	kemObject = KEM( int(request.GET['num']) if 'num' in request.GET else 10, 'model', 'KEM/', 'mongodb://140.120.13.243:27017/')
	model = kemObject.getFilePath(lang)
	return JsonResponse(kemObject.getTerms(model, keyword, int(request.GET['num']) if 'num' in request.GET else 10), safe=False)

@queryString_required(['lang', 'keyword'])
def kcemApi(request):
	"""Generate list of term data source files
	Returns:
		if contains invalid queryString key, it will raise exception.
	"""
	keyword = request.GET['keyword']
	lang = request.GET['lang']

	kem_topn_num=30
	kcm_topn_num=50

	kcm_lists=[]
	count=0

	# for kemtopn in json.loads(requests.get('http://api.udic.cs.nchu.edu.tw/api/kemApi/?keyword={}&lang={}'.format(keyword, lang))):
	# 	temp=[]
	# 	if count!=kem_topn_num:
	# 		try:
	# 			for kcmtopn in kcm_search(kemtopn[0],kcm_topn_num):
	# 				temp.append(kcmtopn[0])
	# 			count=count+1
	# 		except:
	# 			print 'not found'
	# 		if len(temp)!=0:
	# 			kcm_lists.append(temp)
	# 	else:
	# 		break
	# entity={}
	# for kcm_list in kcm_lists:#統計出現的字
	# 	for word in kcm_list:
	# 		if word in entity:
	# 			entity[word]=entity[word]+1.0/float(kem_topn_num)
	# 		else :
	# 			entity[word]=1.0/float(kem_topn_num)
	# sorted_entity = sorted(entity.items(), key=operator.itemgetter(1),reverse=True)
	# for x in sorted_entity[0:10]:
	return JsonResponse(result, safe=False)