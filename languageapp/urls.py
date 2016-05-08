from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.home, name='home'),
	url(r'^exercises/$', views.exercises, name='exercises'),
	url(r'^exercise_hola/$', views.exercise01, name='exercise01'),
]