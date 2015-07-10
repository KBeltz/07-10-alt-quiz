//answers
var a1 = 4;
var a2 = 1;
var a3 = 4;
var a4 = 2;
var a5 = 3;
//questions
var q1 = document.getElementById("q1").innerText;
var q2 = document.getElementById("q2").innerText;
var q3 = document.getElementById("q3").innerText;
var q4 = document.getElementById("q4").innerText;
var q5 = document.getElementById("q5").innerText;
//selections
var s1 = document.getElementById("s1").innerText;
var s2 = document.getElementById("s2").innerText;
var s3 = document.getElementById("s3").innerText;
var s4 = document.getElementById("s4").innerText;
var s5 = document.getElementById("s5").innerText;
//setup
var answers = [a1, a2, a3, a4, a5];
var questions = [q1, q2, q3, q4, q5];
var selections = [s1, s2, s3, s4, s5];
var numCorrect = 0;
var currentQuestion = 0;
var quizLength = answers.length;


document.getElementById("submitter").onclick = process_answer_submission;
document.getElementById("next").onclick = next_question;
//visibility
document.getElementById("q2").style.visibility = "hidden";
document.getElementById("s2").style.visibility = "hidden";
document.getElementById("q3").style.visibility = "hidden";
document.getElementById("s3").style.visibility = "hidden";
document.getElementById("q4").style.visibility = "hidden";
document.getElementById("s4").style.visibility = "hidden";
document.getElementById("q5").style.visibility = "hidden";
document.getElementById("s5").style.visibility = "hidden";
document.getElementById("submitter").style.visibility = "visible";
//-------------------------------------------------------------------------//

//returns the number currently entered into the #answer field
var given_answer = function() {
  return parseInt(answers[currentQuestion]);
}

//checks if the given argument matches the correct answer
var is_correct_answer = function(num) {
  if (num === answers[currentQuestion]) {
    return true;
  }
  else {
    return false;
  }
}

//updates score if the user input the correct answer
//returns a message based on whether they were correct or incorrect
var update_question_result = function(correct) {
  if (correct) {
    numCorrect++;
    return document.getElementById("question_result").innerText = "Success!";
  }
  else {
    return document.getElementById("question_result").innerText = "Wrong!";
  }
}

//processes answer submission
//hides the submit button
var process_answer_submission = function() {
  var user_answer = given_answer();
  update_question_result(is_correct_answer(user_answer));
  document.getElementById("submitter").style.visibility = "hidden";
}

//updates number of currentQuestion
//removes the current question and selections from view and replaces
//it with the question and selections for the next question
//makes the submit button visible again
//calculates the quiz score and hides next button once the quiz is complete
function next_question() {
  currentQuestion++;
  if (currentQuestion < quizLength) {
    document.getElementById("questions[currentQuestion]").innerText.style.visibility = "visible";
    document.getElementById("selections[currentQuestion]").innerText.style.visibility = "visible";
    document.getElementById("submitter").onclick = process_answer_submission;
    document.getElementById("next").onclick = next_question;
    document.getElementById("submitter").style.visibility ="visible";
  }
  else {
    var percent = (numCorrect/quizLength) * 100;
    document.getElementById("total_result").innerText = ("You answered " + numCorrect + " of " + quizLength + " questions correctly, for a score of " + percent + "%!");
    document.getElementById("next").style.visibility = "hidden";
  }
}
