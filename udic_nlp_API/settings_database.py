from .settings import DEBUG
MongoUri = {
    "DEBUG":None,
    "Production":None
}
if DEBUG:
    uri = MongoUri['DEBUG']
else:
    uri = MongoUri['Production']
