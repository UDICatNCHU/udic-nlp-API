# -*- coding: utf-8 -*-
from django.http import JsonResponse
from djangoApiDec.djangoApiDec import queryString_required
from KCM.KCM import KCM
from KCM.build.import2DB import import2Mongo
from KEM.KEM import KEM
from KCEM.KCEM import KCEM
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

@queryString_required(['lang', 'keyword', 'kcm', 'kem'])
def kcem(request):
	import json, requests
	"""Generate list of term data source files
	Returns:
		if contains invalid queryString key, it will raise exception.
	"""
	keyword = request.GET['keyword']
	lang = request.GET['lang']
	kcm = request.GET['kcm']
	kem = request.GET['kem']
	k = KCEM('mongodb://140.120.13.243:27017/')
	return JsonResponse(k.get(keyword, lang, num = int(request.GET['num']) if 'num' in request.GET else 10, kem_topn_num=kem, kcm_topn_num=kcm), safe=False)