class KCEM(object):
	"""docstring for KCEM"""
	def __init__(self, uri=None):
		from pymongo import MongoClient
		self.client = MongoClient(uri)
		self.db = self.client['nlp']
		self.Collect = self.db['kcem']

	def get(self, keyword, lang, num, kem_topn_num, kcm_topn_num):
		import json, requests
		"""Generate list of term data source files
		Returns:
			if contains invalid queryString key, it will raise exception.
		"""
		result = self.Collect.find({'key':keyword, str(kcm_topn_num)+str(kem_topn_num):{'$exists':True}}, {str(kcm_topn_num)+str(kem_topn_num):1, '_id':False}).limit(1)
		if result.count()==0:
			kcm_lists = list()

			for kemtopn in json.loads(requests.get('http://api.udic.cs.nchu.edu.tw/api/kem/?keyword={}&lang={}&num={}'.format(keyword, lang, kem_topn_num)).text):
				kcm_lists.append( list( kcmtopn 
					for kcmtopn in json.loads(requests.get('http://api.udic.cs.nchu.edu.tw/api/kcm/?keyword={}&lang={}&num={}'.format(kemtopn[0], lang, kcm_topn_num)).text )
					) 
				)

			result={}
			for kcm_list in kcm_lists:#統計出現的字
				for word in kcm_list:
					result[word[0]] = result.setdefault(word[0], 0) + 1.0/float(kem_topn_num)

			result = sorted(result.items(), key = lambda x: -x[1])
			self.Collect.update({'key':keyword}, {'key':keyword, str(kcm_topn_num)+str(kem_topn_num):result}, upsert=True)
			return result[:num]
			
		return dict(list(result)[0])[str(kcm_topn_num)+str(kem_topn_num)][:num]