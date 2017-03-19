# # -*- coding: utf-8 -*-
# from django.http import JsonResponse
# from djangoApiDec.djangoApiDec import queryString_required
# from KCM.__main__ import KCM
# from KEM.KEM import KEM
# from KCEM.KCEM import KCEM
# from .settings_database import uri

# @queryString_required(['lang', 'keyword'])
# def kem(request):
#     """Generate list of term data source files
#     Returns:
#         if contains invalid queryString key, it will raise exception.
#     """
#     keyword = request.GET['keyword']
#     lang = request.GET['lang']
#     kemObject = KEM( int(request.GET['num']) if 'num' in request.GET else 10, lang, 'KEM/', uri)
#     return JsonResponse(kemObject.getTerms(keyword, int(request.GET['num']) if 'num' in request.GET else 10), safe=False)