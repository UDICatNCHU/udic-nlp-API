# -*- coding: utf-8 -*-
from django.http import JsonResponse
from djangoApiDec.djangoApiDec import queryString_required
from KCM.KCM import KCM
from KCM.build.import2DB import import2Mongo
from KEM.KEM import KEM
import os

@queryString_required(['lang', 'keyword'])
def kcm(request):
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
def kem(request):
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
def kcem(request):
	import json, requests
	"""Generate list of term data source files
	Returns:
		if contains invalid queryString key, it will raise exception.
	"""
	keyword = request.GET['keyword']
	lang = request.GET['lang']

	kem_topn_num=100
	kcm_topn_num=10
	kcm_lists = list()

	for kemtopn in json.loads(requests.get('http://api.udic.cs.nchu.edu.tw/api/kemApi/?keyword={}&lang={}&num={}'.format(keyword, lang, kem_topn_num)).text):
		kcm_lists.append( list( kcmtopn 
			for kcmtopn in json.loads(requests.get('http://api.udic.cs.nchu.edu.tw/api/kcmApi/?keyword={}&lang={}&num={}'.format(kemtopn[0], lang, kcm_topn_num)).text )
			) 
		)

	entity={}
	for kcm_list in kcm_lists:#統計出現的字
		for word in kcm_list:
			entity[word[0]] = entity.setdefault(word[0], 0) + 1.0/float(kem_topn_num)

	sorted_entity = sorted(entity.items(), key=lambda x: x[1], reverse=True)
	return JsonResponse(sorted_entity[:10], safe=False)