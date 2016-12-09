# -*- coding: utf-8 -*-
from django.http import JsonResponse
from djangoApiDec.djangoApiDec import queryString_required
from KCM.KCM import KCM
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
	kcmObject = KCM( int(request.GET['num']) if 'num' in request.GET else 10, 'model', 'KCM/')
	model = kcmObject.getFilePath(lang)
	kcmObject.setMissionType('json')
	pq = kcmObject.get_cor_term_freq_pq(model, keyword, 1)
	result = kcmObject.getOrCreate(keyword, kcmObject.return_top_n_cor_terms, pq)

	return JsonResponse(result, safe=False)

@queryString_required(['lang', 'keyword'])
def kemApi(request):
	"""Generate list of term data source files
	Returns:
		if contains invalid queryString key, it will raise exception.
	"""
	keyword = request.GET['keyword']
	lang = request.GET['lang']
	kemObject = KEM( int(request.GET['num']) if 'num' in request.GET else 10, 'model', 'KEM/')
	model = kemObject.getFilePath(lang)
	kemObject.setMissionType('json')
	result = kemObject.getOrCreate(keyword, kemObject.getTerms, model, keyword)
	return JsonResponse(result, safe=False)

@queryString_required(['lang', 'keyword'])
def kcemApi(request):
	"""Generate list of term data source files
	Returns:
		if contains invalid queryString key, it will raise exception.
	"""
	keyword = request.GET['keyword']
	lang = request.GET['lang']
	kcmObject = KCM( int(request.GET['num']) if 'num' in request.GET else 10, 'model', 'KCM/')
	model = kcmObject.getFilePath(lang)
	kcmObject.setMissionType('json')
	pq = kcmObject.get_cor_term_freq_pq(model, keyword, 1)
	result = kcmObject.getOrCreate(keyword, kcmObject.return_top_n_cor_terms, pq)

	return JsonResponse(result, safe=False)