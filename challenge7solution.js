(function() {
function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.askQuestion = function() {
    console.log(this.question);
    this.answers.forEach((answer, index) => console.log(String.fromCharCode(97 + index) + ') ', answer));
}

Question.prototype.checkAnswer = function(ans) {
    if(ans === this.correct) {
        console.log('Correct answer!')
    } else {
        console.log('Wrong answer!');
    }
}

var q1 = new Question('What is Html?', ['Hyphen Technology Modern Language','How To Marking Language','Hyper Text Markup Language'], 'c');

var q2 = new Question('What is css?', ['Closing Sentiments Style','It is a stylesheet language','Common Source Scripts'], 'b');

var q3 = new Question('What is JavaScript?', ['A programming language of the web','A superset of Java program','A modern mark-up language'], 'a');

var q4 = new Question('What is a Web Server?', ['A device which controls access to stored files on a network','An open source scripting language ','It is database softwaare','A programme that uses http to serve up web pages to http clients'], 'd');

var questions = [q1, q2, q3, q4];

var num = Math.floor(Math.random() * questions.length);
    
questions[num].askQuestion();
    
var userAnswer = prompt('Select the number for the correct answer');
    
questions[num].checkAnswer(userAnswer);
        
})();