document.getElementById("whichLesson").innerHTML = "Lesson 02: Yo/T&#0250/Usd/Usds";

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
title.style.marginLeft = "360px"; 

//create the text element for the text div and append to text div
var textInContent = document.createElement('p');
//set the text 
textInContent.setAttribute('class', 'textPresentation');
textInContent.innerHTML = "In this section vocabulary will be introduced to the conjugation chart, which will help you conjugate verbs";
textInContent.innerHTML += " based on the subject. You will also be introduced to some verbs and adjectives.<br/>When you see a word, click on it to see its"; 
textInContent.innerHTML += " english translation.";
textInContent.innerHTML += " Click the next button to continue.";
main.appendChild(textInContent);
textInContent.style.marginTop = "140px";
textInContent.style.marginLeft = "185px";

//create a p element that will hold a word's definition
var definitionText = document.createElement('p');
definitionText.setAttribute('class', 'textPresentation');
definitionText.style.marginTop = "200px";
main.appendChild(definitionText);


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
rightButton.setAttribute('onclick', 'slides("second");');
rightButton.setAttribute('class', 'btn btn-default btn-lg');
//create a span element that will contain a glyphicon
var glyphR = document.createElement('span');
glyphR.setAttribute('class', 'glyphicon glyphicon-arrow-right');
rightButton.appendChild(glyphR);
divDirections.appendChild(rightButton);

//create table that will show conjugation chart
var tableOrig = document.createElement("table");
tableOrig.setAttribute('id', 'conjugTable');
tableOrig.innerHTML = "<tr><th>Singular</th><th>Plural</th></tr>";
tableOrig.innerHTML += "<tr><td>Yo</td><td>Nosotros</td></tr>";
tableOrig.innerHTML += "<tr><td>T&#0250</td><td>Vosotros</td></tr>";
tableOrig.innerHTML += "<tr><td>Usted</td><td>Ustedes</td></tr>";
tableOrig.innerHTML += "<tr><td>El/Ella</td><td>Ellos</td></tr>";

//object prototype
function vocabWord(span, engl, def)
{
	this.english = engl;
	this.spanish = span;
	this.definition = def;
}

//switch between english and spanish
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

//create vocab words
var yo = new vocabWord("<strong>Yo</strong>", "<strong>Me, I</strong>", "used by a speaker to refer to himself or herself as the object of a verb or preposition");
var tu = new vocabWord("<strong>Tu</strong>", "<strong>You</strong>", "spanish informal; used to refer to the person or people that the speaker is addressing");
var ud = new vocabWord("<strong>Usted</strong>", "<strong>You</strong>", "spanish formal; used to refer to the person or people that the speaker is addressing");
var elElla = new vocabWord("<strong>El/Ella</strong>", "<strong>Him, Her</strong>", "used as the object of a verb or preposition to refer to a male/female person previously mentioned or easily identified");
var nos = new vocabWord("<strong>Nosotros</strong>", "<strong>We</strong>", "used by a speaker to refer to himself or herself and one or more other people considered together");
var vos = new vocabWord("<strong>Vosotros</strong>", "<strong>Y'all, You people</strong>", "spanish informal; used to refer to more than one person");
var uds = new vocabWord("<strong>Ustedes</strong>", "<strong>You people</strong>", "spanish formal; used to refer to more than one person");
var ellos = new vocabWord("<strong>Ellos</strong>", "<strong>Them</strong>", "used as the object of a verb or preposition to refer to two or more people or things previously mentioned or easily identified");

//go through slides
function slides(which)
{
	switch (which)
	{
		case "first":
			main.removeChild(document.getElementById('conjugTable'));
			textInContent.innerHTML = "In this section vocabulary will be introduced to the conjugation chart, which will help you conjugate verbs";
			textInContent.innerHTML += " based on the subject. You will also be introduced to some verbs and adjectives.<br/>When you see a word, click on it to see its"; 
			textInContent.innerHTML += " english translation.";
			textInContent.innerHTML += " Click the next button to continue.";
			rightButton.setAttribute('onclick', 'slides("second");');
			break;
		case "second":
			//append and show table
			textInContent.innerHTML = "";
			main.appendChild(tableOrig);
			leftButton.setAttribute('onclick', 'slides("first");');
			rightButton.setAttribute('onclick', 'slides("third");');
			break;
		case "third":

			//search for table element
			for (var i = 0; i < main.childNodes.length; i++)
			{
				//if table element is found, delete it
				if (main.childNodes[i].nodeName == "TABLE")
				{	
					main.removeChild(document.getElementById('conjugTable'));
				}
			}
			textInContent.style.marginLeft = "160px";
			textInContent.innerHTML = "The previous slide shows the conjugation table, which ";
			textInContent.innerHTML += "will be used to change verbs through patterns. The ";
			textInContent.innerHTML += "next slides will show you the meaning of each word.";
			textInContent.innerHTML += " Click on the word to change from spanish/english.";
			definitionText.innerHTML = "";
			leftButton.setAttribute('onclick', 'slides("second");');
			rightButton.setAttribute('onclick', 'slides("fourth");');
			break;
//---------------------------------------START SHOWING VOCAB WORDS FROM THIS POINT ON-----------------------------------------------
		case "fourth":
			textInContent.innerHTML = yo.spanish;
			definitionText.innerHTML = yo.definition;
			textInContent.setAttribute('onclick', 'translateVocab(yo);');
			leftButton.setAttribute('onclick', 'slides("third");');
			rightButton.setAttribute('onclick', 'slides("fifth");');
			break;
		case "fifth":
			textInContent.innerHTML = tu.spanish;
			definitionText.innerHTML = tu.definition;
			textInContent.setAttribute('onclick', 'translateVocab(tu);');
			leftButton.setAttribute('onclick', 'slides("fourth");');
			rightButton.setAttribute('onclick', 'slides("sixth");');
			break;
		case "sixth":
			textInContent.innerHTML = ud.spanish;
			definitionText.innerHTML = ud.definition;
			textInContent.setAttribute('onclick', 'translateVocab(ud);');
			leftButton.setAttribute('onclick', 'slides("fifth");');
			rightButton.setAttribute('onclick', 'slides("seventh");');
			break;
		case "seventh":
			textInContent.innerHTML = elElla.spanish;
			definitionText.innerHTML = elElla.definition;
			textInContent.setAttribute('onclick', 'translateVocab(elElla);');
			leftButton.setAttribute('onclick', 'slides("sixth");');
			rightButton.setAttribute('onclick', 'slides("eigth");');
			break;
		case "eigth":
			textInContent.innerHTML = nos.spanish;
			definitionText.innerHTML = nos.definition;
			textInContent.setAttribute('onclick', 'translateVocab(nos);');
			leftButton.setAttribute('onclick', 'slides("seventh");');
			rightButton.setAttribute('onclick', 'slides("ninth");');
			break;
		case "ninth":
			textInContent.innerHTML = vos.spanish;
			definitionText.innerHTML = vos.definition;
			textInContent.setAttribute('onclick', 'translateVocab(vos);');
			leftButton.setAttribute('onclick', 'slides("eigth");');
			rightButton.setAttribute('onclick', 'slides("tenth");');
			break;
		case "tenth":
			textInContent.innerHTML = uds.spanish;
			definitionText.innerHTML = uds.definition;
			textInContent.setAttribute('onclick', 'translateVocab(uds);');
			leftButton.setAttribute('onclick', 'slides("ninth");');
			rightButton.setAttribute('onclick', 'slides("eleventh");');
			glyphR.setAttribute('class', 'glyphicon glyphicon-arrow-right');
			glyphR.innerHTML = "";
			break;
		case "eleventh":
			textInContent.innerHTML = ellos.spanish;
			definitionText.innerHTML = ellos.definition;
			textInContent.setAttribute('onclick', 'translateVocab(ellos);');
			leftButton.setAttribute('onclick', 'slides("tenth");');
			rightButton.setAttribute('onclick', 'location.href="/lessons"');
			glyphR.setAttribute("class", "");
			glyphR.innerHTML = "End of Vocab Section";
			break;
	}
}

