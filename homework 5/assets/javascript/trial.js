$(document).ready(function() {
	
	var question1 = {
		text: "Where is Wakanda located?", 
		answer: [
			"<div class='text-center btn btn-info btn-block' data-correct='true'>Africa</div>", 
			"<div class='text-center btn btn-info btn-block'>South America</div>", 
			"<div class='text-center btn btn-info btn-block'>Australia</div>", 
			"<div class='text-center btn btn-info btn-block'>Antartica</div>"],
		correct: false,
	}

	var question2 = {
		text: "Thor's hammer Mjölnir is made from what type of metal?", 
		answer: [
			"<div class='text-center btn btn-info btn-block' data-correct='true'>Uru</div>",
			"<div class='text-center btn btn-info btn-block'>Vibranium</div>",
			"<div class='text-center btn btn-info btn-block'>Adamantium</div>",
			"<div class='text-center btn btn-info btn-block'>Amazonium</div>"],
		correct: false,
	}

	var question3 = {
		text: "How does Yandu control the Yaka Arrow?", 
		answer: [
			"<div class='text-center btn btn-info btn-block' data-correct='true'>By whistling</div>",
			"<div class='text-center btn btn-info btn-block'>Telepathy</div>", 
			"<div class='text-center btn btn-info btn-block'>By blinking</div>", 
			"<div class='text-center btn btn-info btn-block'>By flicking his wrist</div>"],
		correct: false,
	}

	var question4 = {
		text: "What are Groots final line in Avengers: Infinity War?", 
		answer: [
			"<div class='text-center btn btn-info btn-block' data-correct='true'>Dad</div>",
			"<div class='text-center btn btn-info btn-block'>Goodbye</div>", 
			"<div class='text-center btn btn-info btn-block'>Sorry</div>", 
			"<div class='text-center btn btn-info btn-block'>I'll miss you</div>"],
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

	randomizeAnswers();
	intervalID = setInterval(timer, 1000);
	$("#snarf").css('background', '#FFF');
	$("#text").html("<div><h4>" + array.text);

	for (var i = 0; i < array.answer.length; i++) {
		$("#answers").append(array.answer[i]);
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
		$("#answers").empty();
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

	$("#answers").empty();
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
		questionBank[count].correct = "AAAAAAAAGHHHHH! [is cast into the gorge by an invisible force]";
		count++;
		setTimeout(function() {
			checkGameEnd();		
		}, 600);
	}
	time--;
};

function randomizeAnswers() {
	for (var i = 0; i < questionBank.length; i++) {
		questionBank[i].answer.sort(function(a, b){return 0.5 - Math.random()});
	}
}

$("#img1").click(function() {

	if ($("#keeperThoughts").css("display") === "block"); {
		$("#keeperThoughts").css("display", "none");
		$("#arthurThoughts").toggle();
	}

});

$("#img2").click(function() {

	if ($("#arthurThoughts").css("display") === "block"); {
		$("#arthurThoughts").css("display", "none");
		$("#keeperThoughts").toggle();
	}
});




});