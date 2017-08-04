
var cq;
var qID;
var aID;
var score=0;
var index = 1;
var trivia = {
	quiz: {
		1:{
			question: "When was Nintendo founded?",
			answer1: "1970",
			answer2: "1889",
			answer3: "1950",
			answer4: "1789",
			correct: 2
		},
		2:{
			question: "What was Satoru Iwata in his heart?",
			answer1: "a gamer",
			answer2: "a developer",
			answer3: "a corporate President",
			answer4: "a lizard person",
			correct: 1
		},
		3:{
			question: "What type of developer is Gamefreak in relation to Nintendo?",
			answer1: "first party",
			answer2: "second party",
			answer3: "third party",
			answer4: "fourth party",
			correct: 2
		},
		4:{
			question: "Who, as of 2017, is the current CEO of Nintendo?",
			answer1: "Shigeru Miyamoto",
			answer2: "Reggie Fils-Aime",
			answer3: "Bill Trinnen",
			answer4: "Tatsumi Kimishima",
			correct: 4
		},
		5:{
			question: "What was the first Mario game originally going to be?",
			answer1: "a plumbing game",
			answer2: "an RPG",
			answer3: "a Popeye game",
			answer4: "a boxing game",
			correct: 3
		},

	},
	ResetQuestion: function(){
		$("#textCont").empty();
		$("#buttonCont").empty();

	},
	loadQuestion: function(qID){
		var sHTML = [];

		$("#textCont").text(trivia.quiz[qID].question);
		sHTML.push("<button id ='a1' onclick='trivia.checkAnswer(" + qID + ",1)'>" + trivia.quiz[qID].answer1 + "</button>");
		sHTML.push("<button id ='a2' onclick='trivia.checkAnswer(" + qID + ",2)'>" + trivia.quiz[qID].answer2 + "</button>");
		sHTML.push("<br/>");
		sHTML.push("<button id ='a3' onclick='trivia.checkAnswer(" + qID + ",3)'>" + trivia.quiz[qID].answer3 + "</button>");
		sHTML.push("<button id ='a4' onclick='trivia.checkAnswer(" + qID + ",4)'>" + trivia.quiz[qID].answer4 + "</button>");
		$("#buttonCont").append(sHTML.join(""));
	},
	checkAnswer: function(qID, aID){
		//var nextID = qID + 1;

		if (aID == trivia.quiz[qID].correct) {
			score = score+ 1;
			console.log("correct!");
		} 
		else {
			score= score -1;
		}
	},
	outScore: function(){
		trivia.ResetQuestion();
		$("#textCont").text("Your score is " + parseInt(score));

	}
}
