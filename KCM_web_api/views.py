# -*- coding: utf-8 -*-
from django.http import JsonResponse
from djangoApiDec.djangoApiDec import queryString_required
from KCM.KCM import KCM
import os

@queryString_required(['keyword'])
def kcmApi(request):
	"""Generate list of term data source files
	Returns:
		if contains invalid queryString key, it will raise exception.
	"""
	kcmObject = KCM('model', 'KCM/')
	keyword = request.GET['keyword']
	filePath = kcmObject.getFilePath('cht')
	kcmObject.setMissionType('json')
	pq = kcmObject.get_cor_term_freq_pq(filePath, keyword, 1)
	result = kcmObject.getOrCreate(keyword, kcmObject.return_top_n_cor_terms, pq, 10)

	return JsonResponse(result, safe=False)