from django.http import JsonResponse
from djangoApiDec.djangoApiDec import queryString_required, date_proc
from KCM.KCM import KCM

@date_proc
@queryString_required(['keyword'])
def kcmApi(request, date):
	"""Generate list of term data source files
	Returns:
		if contains invalid queryString key, it will raise exception.
	"""
	kcmObject = KCM('model')
	keyword = request.GET['keyword']
	filePath = kcmObject.getFilePath('cht')
	print(filePath)
	kcmObject.setMissionType('json')
	result = kcmObject.getOrCreate(keyword, kcmObject.return_top_n_cor_terms, kcmObject.get_cor_term_freq_pq(filePath, keyword, 10), 10)

	return JsonResponse(result, safe=False)