document.getElementById("whichLesson").innerHTML = "Lesson 01: Hola!";

var main = document.getElementById("ex-content");
var title = document.createElement('h2');
title.innerHTML = "Dialogue";
title.setAttribute('id', 'headerTitle');
main.appendChild(title);
//set the title and text of the first 'slide'
title.style.marginLeft = "376px"; 

var divDirections =  document.createElement('div');
//set the id attribute and append to main div
divDirections.setAttribute('id', 'directionButtons');
main.appendChild(divDirections);

//create the text element for the text div and append to text div
var textInContent = document.createElement('p');
//set the text 
textInContent.setAttribute('class', 'textPresentation');
textInContent.innerHTML = "In this section you will see various types of dialogues and their english translations.";
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

//----------------------------------ELEMENTS CREATION COMPLETE---------------------------------------------------

function slides(which)
{	
	textInContent.style.marginTop = "120px";
	textInContent.style.textAlign = "left";
	textInContent.style.fontSize = "14pt";
	switch (which)
	{
		case "first":
			textInContent.innerHTML = "<strong>Spanish Formal:</strong><br/><br/>";
			textInContent.innerHTML += "<strong>Sra. Cindy:</strong> Hola, mi nombre es Sra. Cindy. Soy de Jalisco, Mexico.<br/>";
			textInContent.innerHTML += "<strong>Estudiante:</strong> Mucho gusto Sra. Cindy! Me llamo ________.<br/>";
			textInContent.innerHTML += "<strong>Sra. Cindy:</strong> Es un placer tenerte en clase. <br/><br/>";
			textInContent.innerHTML += "<strong>English Formal:</strong><br/><br/>";
			textInContent.innerHTML += "<strong>Mrs. Cindy:</strong> Hello, my name is Mrs. Cindy. I am from Jalisco, Mexico.<br/>";
			textInContent.innerHTML += "<strong>Student:</strong> A pleasure to meet you Mrs. Cindy! My name is ________.<br/>";
			textInContent.innerHTML += "<strong>Mrs. Cindy:</strong> It is a pleasure to have you in class. <br/>";
			rightButton.setAttribute('onclick', 'location.href="/lessons";');
			glyphR.setAttribute("class", "");
			glyphR.innerHTML = "End of Dialogue Section";
			break;		
	}
	
}

