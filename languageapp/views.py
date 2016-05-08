from django.shortcuts import render

# Create your views here.
def home(request):
	return render(request, 'languageapp/base.html', {})

def exercises(request):
	return render(request, 'languageapp/exercisePage.html', {})

def exercise01(request):
	return render(request, 'languageapp/exercise_01Hola.html', {})
