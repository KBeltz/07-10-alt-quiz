//setup
var answers = ["", 4, 1, 4, 2, 3];
var questions = [q0, q1, q2, q3, q4, q5];
var numCorrect = 0;
var currentQuestion = 0;
var quizLength = answers.length - 1;

function _(el) {
  return document.getElementById(el);
}

_("submitter").onclick = process_answer_submission;
_("next").onclick = next_question;
_("submitter").style.visibility = "hidden";
_("user_input").style.visibility = "hidden";

//returns the number currently entered into the #answer field
var given_answer = function() {
  return _("choice").value;
}

//checks if the given argument matches the correct answer
var is_correct_answer = function(input) {
  if (input == answers[currentQuestion]) {
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
    return _("question_result").innerText = "Success!";
  }
  else {
    return _("question_result").innerText = "Wrong!";
  }
}

//processes answer submission
//hides the submit button
var process_answer_submission = function() {
  var user_answer = given_answer();
  update_question_result(is_correct_answer(user_answer));
  _("submitter").style.visibility = "hidden";
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
  if (currentQuestion < quizLength + 1) {
    _("submitter").onclick = process_answer_submission;
    _("next").onclick = next_question;
    _("submitter").style.visibility ="visible";
    _("user_input").style.visibility = "visible";
    _(questions[currentQuestion].id).style.display = "block";
    _(questions[currentQuestion - 1].id).style.display = "none";
    _("choice").value = "";
  }
  else {
    var percent = (numCorrect/quizLength) * 100;
    _("total_result").innerText = ("You answered " + numCorrect + " of " + quizLength + " questions correctly, for a score of " + percent + "%!");
    _("next").style.visibility = "hidden";
  }
  return _("question_result").innerText = "";
}
