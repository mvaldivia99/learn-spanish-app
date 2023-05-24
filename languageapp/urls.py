from django.urls import include, re_path
from . import views

urlpatterns = [
	re_path(r'^$', views.home, name='home'),
	re_path(r'^lessons/$', views.lessons, name='lessons'),
	re_path(r'^lesson01_Vocab/$', views.lesson01_Vocab, name='lesson01_Vocab'),
	re_path(r'^lesson01_Dialogue/$', views.lesson01_Dialogue, name='lesson01_Dialogue'),
	re_path(r'^lesson02_Vocab/$', views.lesson02_Vocab, name='lesson02_Vocab'),
	re_path(r'^login/$', views.user_login, name='login'), 
    re_path(r'^logout/$', views.user_logout, name='logout'),
    re_path(r'^restricted/', views.restricted, name='restricted'),
    re_path(r'^register/$', views.register, name='register'), 
]