$(document).ready(function(){
	$("#startGame").on("click", gameStatus.Timer); 
  });

	var gameStatus = {
  
	
	timeLeft : 60,
  

	Timer: function() {
	  $("#timer").text("Time left:" + gameStatus.timeLeft + 'seconds');
	  setInterval(gameStatus.countdown, 1000);
	  $("#start-page").hide();
	  trivia.showQuestions();
	},
  
	countdown: function () {
	  gameStatus.timeLeft--;
	  $("#timer").text("Time left:" + gameStatus.timeLeft + 'seconds');
	  if (gameStatus.timeLeft === 0) {
		gameStatus.stopTimer();
		$("#timer").empty();
	  }
	},
  
	stopTimer: function() {
	  clearInterval();
	  trivia.checkAnswers();
	},
  
	showEndGame: function(numCorrect, numIncorrect) {
	  $("#end-game").show();
	  $("#questions-box").empty();
	  $("#timer").empty();
	  $("#timer").hide();
	  $("#correct-answers").text("Correct answers: " + numCorrect);
	  $("#incorrect-answers").text("Incorrect answers: " + numIncorrect);
	}
  }

	var trivia = {
  
		showQuestions: function() {
		  var divContainer = $("#questions-box");
	
		  for (var i = 0; i < questionBank.length; i++) {
	  
			divContainer.append('<div id="question">' + questionBank[i].question + '</div>');
	  
			var answer1 = questionBank[i].options[0];
			var answer2 = questionBank[i].options[1];
			var answer3 = questionBank[i].options[2];
			var answer4 = questionBank[i].options[3];
	  
			divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
			divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
			divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
			divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');
		}
	  
		  var doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
		  divContainer.append(doneButton);
		  $("#done-button").on("click", gameStatus.stopTimer);
		},
	  
		checkAnswers: function() {
		  var correctAnswer;
		  var userAnswer;
		  var numCorrect = 0;
		  var numIncorrect = 0;
	  
		  for (var i = 0; i < questionBank.length; i++) {
			correctAnswer = questionBank[i].correct;
			userAnswer = $('input[id=radio'+i+']:checked + label').text();
	  
			if (userAnswer === correctAnswer) {
			  numCorrect++;
			} else if (userAnswer !== correctAnswer) {
			  {
				numIncorrect++;
			  }
			}
		  }
	  
		  gameStatus.showEndGame(numCorrect, numIncorrect);
		},
	  }
	  
	  var questionBank =
	  [
		{
			question: "What movie did Thanos first appear in?",
			correct: "Avengers",
		  options: ["Avengers", "Thor", "Captain America: Civil War", "Avengers: Infinity War"],
		},
		{
			question: "What Does S.H.I.E.L.D. stand for?",
			correct: "Strategic Homeland Intervention Enforcement and Logistics Division",
		  options: ["Strategic Homeland Investigative Enforcement and Logistics Division", "Strategic Homeland Intervention Enforcement and Logic Division", "Strategic Homeland Intervention Enforcement and Logistics Department","Strategic Homeland Intervention Enforcement and Logistics Division"],
		},
		{
		  question: "Who was the doctor that transformed Steve Rogers into Captain America?",
			correct: "Dr. Erskine",
			options: ["Dr.Edward", "Dr. Erskine", "Dr.Elbath", "Dr.Earon"],
		},
		{
			question: "Where is Wakanda located?", 
			correct: "Africa",
			options: ["South America", "Australia", "Africa","Antartica",],
		},
		{
			question: "Thor's hammer Mjölnir is made from what type of metal?", 
			correct: "Uru",
			options: ["Vibranium", "Uru", "Amazonium", "Adamantium"],
		},
		{
			question: "How does Yandu control the Yaka arrow?", 
			correct: "By whistling",
			options: ["Telepathy", "By blinking", "By flicking his wrist", "By whistling"],
		
		},
		{
			question: "In the comics, who is Thanos in love with?", 
			correct: "Mistress Death",
			options: ["Scarlet Witch", "Mistress Time", "Mistress Death", "Gamora"],
		
		},
		{
			question: "What is Groots final line in Avengers: Infinity War?", 
			correct: "Dad",
			options: ["Goodbye", "Sorry", "I'll miss you", "Dad"],
			
		},
	  ]
  

