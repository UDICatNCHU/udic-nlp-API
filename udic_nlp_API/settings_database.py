from .settings import DEBUG
MongoUri = {
    "DEBUG":'mongodb://mongo:27017',
    "Production":None
}
if DEBUG:
    uri = MongoUri['DEBUG']
else:
    uri = MongoUri['Production']
