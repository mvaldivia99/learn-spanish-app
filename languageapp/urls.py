from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.home, name='home'),
	url(r'^lessons/$', views.lessons, name='lessons'),
	url(r'^lesson01_Vocab/$', views.lesson01_Vocab, name='lesson01_Vocab'),
	url(r'^lesson01_Dialogue/$', views.lesson01_Dialogue, name='lesson01_Dialogue'),
	url(r'^lesson02_Vocab/$', views.lesson02_Vocab, name='lesson02_Vocab'),
]