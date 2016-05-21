from django.shortcuts import render

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