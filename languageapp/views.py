from django.shortcuts import render, get_object_or_404, redirect
from .forms import UserForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect, HttpResponse

# Create your views here.
def home(request):
	return render(request, 'languageapp/base.html', {})

def lessons(request):
	return render(request, 'languageapp/lessons.html', {})

def lesson01_Vocab(request):
	scriptLoc = "/static/javascript/lesson01_vocab.js"
	return render(request, 'languageapp/lessonStruc.html', {'scriptLoc' : scriptLoc})

def lesson01_Dialogue(request):
	scriptLoc = "/static/javascript/lesson01_dialogue.js"
	return render(request, 'languageapp/lessonStruc.html', {'scriptLoc' : scriptLoc})

def lesson02_Vocab(request):
	scriptLoc = "/static/javascript/lesson02_vocab.js"
	return render(request, 'languageapp/lessonStruc.html', {'scriptLoc' : scriptLoc})

def register(request):
	registered = False

	if request.method == 'POST':
		user_form = UserForm(data=request.POST)
		
		if user_form.is_valid() :
			user = user_form.save()

			user.setpassword(user.password)
			user.save()

			registered = True
		else:
			print(user_form.errors)

	else:
		user_form = UserForm()

	return render(request, 'languageapp/register.html', {'user_form': user_form,'registered': registered})

def user_login(request):
	if request.method == 'POST':

		username = request.POST.get('username')
		password = request.POST.get('password')

		user = authenticate(username=username, password=password)

		if user:
			if user.is_active:
				login(request, user)
				return hHttpResponsedRedirect('/')

		else:
			print("Invalid login details: {0}, {1}".format(username, password))
			return HttpResponse("Invalid login details supplied")

	else:
		return render(request, 'languageapp/login.html')
		
@login_required
def restricted(request):
	return HttpResponse("Since you're logged in, you can see this text!")

def user_logout(request):
	logout(request)
	return hHttpResponsedRedirect('/')


