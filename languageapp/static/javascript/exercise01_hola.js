//craete a main div that will be the size of the window
var main = document.getElementById("ex-content");
//create a title that will change depending on the interaction
var title;
//create a div that will hold the text
var divContent = document.createElement('div');
//create a div that will hold the left/right buttons
var divDirections = document.createElement('div');
//set the id attribute and append to main div
divDirections.setAttribute('id', 'directionButtons');
main.appendChild(divDirections);
//create the text element for the text div and append to text div
var textInContent = document.createElement('p');
divContent.appendChild(textInContent);

//create the slide that opens the interactive script
function intro()
{
	//set the title and append to main
	title = document.createElement('h2');
	title.innerHTML = "Lesson 1: Hola!"
	title.setAttribute('id', 'headerTitle');
	main.appendChild(title);

	//set the text 
	textInContent.setAttribute('class', 'textPresentation');
	main.appendChild(divContent);
	textInContent.innerHTML = "In this lesson we will learn how to say hello, introduce ourselves, and say goodbye.";
	textInContent.innerHTML += " To get started, click on 'Vocabulary', 'Dialogue', or 'Interactive Game'.";
}

//create the vocabulary interactive section
function startVocab()
{
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
	
	//set the title and text of the first 'slide'
	title.innerHTML = "Vocabulary";
	title.style.marginLeft = "380px"; 
	textInContent.innerHTML = "In this section vocabulary will be shown to you in spanish, and can be set to the english translation.";
	textInContent.innerHTML += " Click the next button to continue.";
	textInContent.style.marginTop = "180px";
	textInContent.style.marginLeft = "185px";

	//create slides
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

//dynamically create navigation buttons of interactive presentation
function createButtons()
{
	//create a div for buttons to be inside
	var buttonDiv = document.createElement('div');
	buttonDiv.setAttribute('id', 'buttonDiv');
	
	//button for the vocabulary section
	var vocabButton = document.createElement('div');
	vocabButton.setAttribute('class', 'gui-buttons');
	vocabButton.setAttribute('onclick', 'startVocab();');
	vocabButton.innerHTML = "Vocabulary";
	buttonDiv.appendChild(vocabButton);

	//button for dialogue interactive
	var dialogueButton = document.createElement('div');
	dialogueButton.setAttribute('class', 'gui-buttons');
	dialogueButton.innerHTML = "Dialogue";
	buttonDiv.appendChild(dialogueButton);

	//button for interactive game
	var gameButton = document.createElement('div');
	gameButton.setAttribute('class', 'gui-buttons');
	gameButton.innerHTML = "Interactive Game";
	buttonDiv.appendChild(gameButton);

	//apend button div to main div
	main.appendChild(buttonDiv);
}

//create the buttons and show the introduction
intro();
createButtons();
