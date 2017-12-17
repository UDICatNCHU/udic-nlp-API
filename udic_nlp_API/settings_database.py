from .settings import DEBUG
MongoUri = {
    "DEBUG":'mongodb://172.17.0.4:27017',
    "Production":None
}
if DEBUG:
    uri = MongoUri['DEBUG']
else:
    uri = MongoUri['Production']
