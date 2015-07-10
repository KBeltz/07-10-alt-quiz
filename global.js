//setup
var answers = [4, 1, 4, 2, 3];
var questions = [q1, q2, q3, q4, q5];
var numCorrect = 0;
var currentQuestion = 0;
var quizLength = answers.length;

document.getElementById("submitter").onclick = process_answer_submission;
document.getElementById("next").onclick = next_question;
document.getElementById("submitter").style.visibility = "visible";

//returns the number currently entered into the #answer field
var given_answer = function() {
  return document.getElementById("choice").value;
}

//checks if the given argument matches the correct answer
var is_correct_answer = function(input) {
  if (input === answers[currentQuestion]) {
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

//-------------------------------------------------------------------------//
//working ^^
//-------------------------------------------------------------------------//

//updates number of currentQuestion
//removes the current question and selections from view and replaces
//it with the question and selections for the next question
//makes the submit button visible again
//calculates the quiz score and hides next button once the quiz is complete
function next_question() {
  currentQuestion++;
  if (currentQuestion < quizLength) {
    document.getElementById("submitter").onclick = process_answer_submission;
    document.getElementById("next").onclick = next_question;
    document.getElementById("submitter").style.visibility ="visible";
    document.getElementById(questions[currentQuestion].id).style.display = "block";
    document.getElementById(questions[currentQuestion - 1].id).style.display = "none";
  }
  else {
    var percent = (numCorrect/quizLength) * 100;
    document.getElementById("total_result").innerText = ("You answered " + numCorrect + " of " + quizLength + " questions correctly, for a score of " + percent + "%!");
    document.getElementById("next").style.visibility = "hidden";
  }
  return document.getElementById("question_result").innerText = "";
}
