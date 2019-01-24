$(document).ready(function() {
	
	var question1 = {
		text: "Where is Wakanda located?", 
		answer: "Africa",
		wrong: ["South America", "Australia", "Antartica"],
		correct: false,
	}

	var question2 = {
		text: "Thor's hammer Mjölnir is made from what type of metal?", 
		answer: "Uru",
		wrong: ["Vibranium", "Adamantium", "Amazonium"],
		correct: false,
	}

	var question4 = {
		text: "How does Yandu control the Yaka arrow?", 
		answer: "By whistling",
		wrong: ["Telepathy", "By blinking", "By fliscking his wrist"],
		correct: false,
	}

	var question3 = {
		text: "What are Groots final line in Avengers: Infinity War?", 
		answer: "Dad",
		wrong: ["Goodbye", "Sorry", "I'll miss you"],
		correct: false,
	}

	var questionBank = [question1, question2, question3, question4];
	var bankLength = questionBank.length;
	var count = 0;
	var intervalID; 
	var time = 8;


$("#start").click(function() {

	createQuestions(questionBank[count]);
	$("#splashScreen").css('display', 'none');
	$("#questions").css('display', 'inherit');

});



function createQuestions(array) {

	intervalID = setInterval(timer, 1000);
	$("#snarf").css('background', '#FFF');
	$("#text").html("<div><h4>" + array.text);
	$("#answers").html("<div class='text-center btn btn-info btn-block' data-correct='true'>" + array.answer);

	for (var i = 0; i < array.wrong.length; i++) {
		$("#answers").append("<div class='text-center btn btn-info btn-block' data-correct='false'>" + array.wrong[i]);
	};

	correct();
}


function nextQuestion() {
	createQuestions(questionBank[count]);
}


function correct() {
	$("#answers div").click(function() {

		var questCorrect = $(this).data("correct");

		if (questCorrect === true) {
			$(this).css('background', '#5CB85C');
			questionBank[count].correct = "I hereby declare you the new Adam Warlock";
			count++;
			clearInterval(intervalID);
			time = 5;
			setTimeout(function() {
				checkGameEnd();		
			}, 300);

		} else {
			$(this).css('background', '#D9534F');
			questionBank[count].correct = "*snaps* Mr.Stark I don't feel so good";
			count++;
			clearInterval(intervalID);
			time = 5;
			setTimeout(function() {
				checkGameEnd();		
			}, 300);	
		}

	});
}


function checkGameEnd() {
	if (count === questionBank.length) {
	$("#questions").css('display', 'none');	
	createResults();
	$("#gameOver").css('display', 'inherit');

	} else {
		nextQuestion();
	}
}


function createResults() {

	for (var i = 0; i < bankLength; i++) {

		$("#results").append("<div>Question #"+[i+1]+': ' + questionBank[i].correct + "</div>");
	}
}


$("#restart").click(function() {

	count = 0;
	$("#results").empty();	

	for (var i = 0; i < bankLength; i++) {
		questionBank[i].correct = false;
	}

	$("#gameOver").css('display', 'none');
	$("#splashScreen").css('display', 'inherit');

});


function timer() {
	$("#timer h1").html("00:0"+time);
	$("#timer").css('visibility', 'inherit');

	if (time === 0) {

		$("#snarf").css('background', '#D9534F');
		clearInterval(intervalID);
		time = 5;
		questionBank[count].correct = "*snaps* Mr.Stark I don't feel so good";
		count++;
		setTimeout(function() {
			checkGameEnd();		
		}, 600);
	}
	time--;
};





});