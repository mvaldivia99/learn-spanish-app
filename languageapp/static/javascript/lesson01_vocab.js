document.getElementById("whichLesson").innerHTML = "Lesson 01: Hola!";

//craete a main div that will be the size of the window
var main = document.getElementById("ex-content");
var divDirections =  document.createElement('div');
//set the id attribute and append to main div
divDirections.setAttribute('id', 'directionButtons');
main.appendChild(divDirections);
var title = document.createElement('h2');
title.innerHTML = "Vocabulary";
title.setAttribute('id', 'headerTitle');
main.appendChild(title);
//set the title and text of the first 'slide'
title.style.marginLeft = "380px"; 

//create the text element for the text div and append to text div
var textInContent = document.createElement('p');
//set the text 
textInContent.setAttribute('class', 'textPresentation');
textInContent.innerHTML = "In this section vocabulary will be shown to you in spanish, and can be set to the english translation.";
textInContent.innerHTML += " Click the next button to continue.";
main.appendChild(textInContent);
textInContent.style.marginTop = "180px";
textInContent.style.marginLeft = "185px";


//create left button
var leftButton = document.createElement('button');
leftButton.setAttribute('class', 'btn btn-default btn-lg');
//create a span element that will hold glyphicon
var glyphL = document.createElement('span');
glyphL.setAttribute('class', 'glyphicon glyphicon-arrow-left');
leftButton.appendChild(glyphL);
divDirections.appendChild(leftButton);	

//create right button
var rightButton = document.createElement('button');
//set onclick attribute that will run an alert function to show that it works
rightButton.setAttribute('onclick', 'slides("first");');
rightButton.setAttribute('class', 'btn btn-default btn-lg');
//create a span element that will contain a glyphicon
var glyphR = document.createElement('span');
glyphR.setAttribute('class', 'glyphicon glyphicon-arrow-right');
rightButton.appendChild(glyphR);
divDirections.appendChild(rightButton);



//object prototype
function newVocabWord(span, engl)
{
	this.english = engl;
	this.spanish = span;
}

//create vocab objects
var hola = new newVocabWord("Hola", "Hello");
var encantado = new newVocabWord("Encantado/a", "Pleased to meet you");
var muchoGusto = new newVocabWord("Mucho Gusto", "Pleased to meet you");
var meLlamo = new newVocabWord("Me llamo ______", "My name is ______");
var miNombre = new newVocabWord("Mi nombre es ______", "My name is ______");
var soy = new newVocabWord("Soy ______", "I am ______");
var soyDe = new newVocabWord("Soy de ______", "I am from ______");

function translateVocab(vocabWord)
{ 
	word = textInContent.innerHTML;
	if (word == vocabWord.spanish)
	{
		textInContent.innerHTML = vocabWord.english;
	}
	else if (word == vocabWord.english)
	{
		textInContent.innerHTML = vocabWord.spanish;
	}


}

//create slides
function slides(which)
{
	switch(which)
	{
		case "first":
			textInContent.innerHTML = hola.spanish;
			textInContent.setAttribute('onclick', 'translateVocab(hola);');
			rightButton.setAttribute('onclick', 'slides("second");');
			break;
		case "second":
			textInContent.innerHTML = encantado.spanish;
			textInContent.setAttribute('onclick', 'translateVocab(encantado);');
			leftButton.setAttribute('onclick', 'slides("first");');
			rightButton.setAttribute('onclick', 'slides("third");');
			break;
		case "third":
			textInContent.innerHTML = muchoGusto.spanish;
			textInContent.setAttribute('onclick', 'translateVocab(muchoGusto);');
			leftButton.setAttribute('onclick', 'slides("second");');
			rightButton.setAttribute('onclick', 'slides("fourth");');
			break;
		case "fourth":
			textInContent.innerHTML = meLlamo.spanish;
			textInContent.setAttribute('onclick', 'translateVocab(meLlamo);');
			leftButton.setAttribute('onclick', 'slides("third");');
			rightButton.setAttribute('onclick', 'slides("fifth");');
			break;
		case "fifth":
			textInContent.innerHTML = miNombre.spanish;
			textInContent.setAttribute('onclick', 'translateVocab(miNombre);');
			leftButton.setAttribute('onclick', 'slides("fourth");');
			rightButton.setAttribute('onclick', 'slides("sixth");');
			break;		
		case "sixth":
			textInContent.innerHTML = soy.spanish;			
			textInContent.setAttribute('onclick', 'translateVocab(soy)');
			leftButton.setAttribute('onclick', 'slides("fifth");');
			rightButton.setAttribute('onclick', 'slides("seventh");');
			break;
		case "seventh":
			textInContent.innerHTML = soyDe.spanish;
			textInContent.setAttribute('onclick', 'translateVocab(soyDe);');
			rightButton.setAttribute('onclick', 'location.href="/lessons";');
			glyphR.setAttribute("class", "");
			glyphR.innerHTML = "End of Vocab Section";
			break;
	}

}





