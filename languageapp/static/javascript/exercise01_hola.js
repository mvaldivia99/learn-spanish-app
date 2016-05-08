var main = document.getElementById("ex-content");
var title;
var divContent = document.createElement('div');
var divDirections = document.createElement('div');
divDirections.setAttribute('id', 'directionButtons');
main.appendChild(divDirections);
var textInContent = document.createElement('p');
divContent.appendChild(textInContent);

function intro()
{
	title = document.createElement('h2');
	title.innerHTML = "Lesson 1: Hola!"
	title.setAttribute('id', 'headerTitle');
	main.appendChild(title);

	textInContent.setAttribute('class', 'textPresentation');
	main.appendChild(divContent);
	textInContent.innerHTML = "In this lesson we will learn how to say hello, introduce ourselves, and say goodbye.";
	textInContent.innerHTML += " To get started, click on 'Vocabulary', 'Dialogue', or 'Interactive Game'.";
}

function startVocab()
{
	var leftButton = document.createElement('button');
	leftButton.setAttribute('class', 'btn btn-default btn-lg');
	leftButton.setAttribute('type', 'button');
	var glyphL = document.createElement('span');
	glyphL.setAttribute('class', 'glyphicon glyphicon-arrow-left');
	leftButton.appendChild(glyphL);
	divDirections.appendChild(leftButton);	

	var rightButton = document.createElement('p');
	rightButton.setAttribute('type', 'button');
	rightButton.setAttribute('onclick', 'slides("first")');
	rightButton.setAttribute('class', 'btn btn-default btn-lg');
	var glyphR = document.createElement('span');
	glyphR.setAttribute('class', 'glyphicon glyphicon-arrow-right');
	rightButton.appendChild(glyphR);
	divDirections.appendChild(rightButton);
	
	title.innerHTML = "Vocabulary";
	title.style.marginLeft = "380px"; 
	textInContent.innerHTML = "In this section vocabulary will be shown to you in spanish, and can be set to the english translation.";
	textInContent.innerHTML += " Click the next button to continue.";
	textInContent.style.marginTop = "180px";
	textInContent.style.marginLeft = "185px";

	function slides(which)
	{
		switch(which)
		{
			//haven't finalized; need to get button working first
			case "first":
				textInContent.innerHTML = "Hola";
				rightButton.setAttribute('onclick', 'slides("second")');
				break;
			case "second":
				textInContent.innerHTML = "Buenos Dias";
				leftButton.setAttribute('onclick', 'slides("first")');
				rightButton.setAttribute('onclick', 'slides("third")');
				break;
		}

	}
}

function createButtons()
{
	var buttonDiv = document.createElement('div');
	buttonDiv.setAttribute('id', 'buttonDiv');
	
	var vocabButton = document.createElement('div');
	vocabButton.setAttribute('class', 'gui-buttons');
	vocabButton.setAttribute('onclick', 'startVocab();');
	vocabButton.innerHTML = "Vocabulary";
	buttonDiv.appendChild(vocabButton);

	var dialogueButton = document.createElement('div');
	dialogueButton.setAttribute('class', 'gui-buttons');
	dialogueButton.innerHTML = "Dialogue";
	buttonDiv.appendChild(dialogueButton);

	var gameButton = document.createElement('div');
	gameButton.setAttribute('class', 'gui-buttons');
	gameButton.innerHTML = "Interactive Game";
	buttonDiv.appendChild(gameButton);

	main.appendChild(buttonDiv);
}

intro();
createButtons();

