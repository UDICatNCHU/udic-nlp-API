"""udic_nlp_API URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from udic_nlp_API import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
]

# kem

import kem.urls
urlpatterns += [
    url(r'^kem/', include(kem.urls))
]

# pmiOfKcm

import PMIofKCM.urls
urlpatterns += [
    url(r'^pmi/', include(PMIofKCM.urls))
]

# KCEM

import kcem.urls
urlpatterns += [
    url(r'^kcem/', include(kcem.urls))
]

# # DbscanApi
# import DbscanApi.urls
# urlpatterns += [
#     url(r'^DbscanApi/',include(DbscanApi.urls, namespace="DbscanApi") ),
# ]

# jiebaWebApi
import jiebaWebApi.urls
urlpatterns += [
    url(r'^jiebaWebApi/',include(jiebaWebApi.urls, namespace="jiebaWebApi") ),
]

# swingerApp
import swingerApp.urls
urlpatterns += [
    url(r'^swinger/', include(swingerApp.urls))
]
