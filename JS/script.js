/* practice */
//alert("Welcome to Ninja");
//
//var a;
//var b = 10;
//var isnan = NaN;
//console.log(typeof b);
//b = undefined;
//console.log(typeof b);
//console.log(a);
//console.log(~44);
//console.log(isnan === "number");
//
//alert("you answered " + prompt("what is the real name of super man?"));
//
//function hoist(){
//        alert(a);
//    
//    var a = 10;
//
//    
//    
//    
//}
//
//add(2,3); // this will work because the add function is hoisted
//
//function add(x,y){
//console.log(x + y);
//}
// // this won't work because the subtract function
//
//
//var subtract = function(x,y){
//console.log(x - y);
//}
//
//subtract(5,2);
//
//var ar = [1,2,3,4];
//console.log(ar);
//
//ar.forEach(function(a,index){
//    console.log(a*a);
//})
//
//function hoist(){
//    alert("janaki");
//}
//
//var x = 11;
//function mean(a,b,c){
//    
//    console.log(y);
//    
//    console.log(arguments);
//    arguments = 10;
//    console.log(arguments);
//     x = 10;
//    
//    var y = 1;
//    console.log(x);
//return (a+b+c)/3;
//}

function update(element,content,klass){
    var p = element.firstChild || document.createElement("p");
    p.textContent = content;
    element.appendChild(p);
    if(klass){
        p.className = klass;
    }
}

var $question = document.getElementById('question');
var $score    = document.getElementById('score');
var $feedback = document.getElementById('feedback');




var quiz = {
    name : "Super Hero Name Quiz",
    description : "How many super heros can you name",
    question : "What is the real name of ",
    questions : [
                {question: "Superman", answer: "Clarke Kent"},
                {question : "Wonderwoman", answer: "Dianna Prince"},
                {question: "Batman", answer: "Bruce Wayne"}
            ]
};


var score = 0; 
update($score,score);  
//var play = play(quiz);
document.addEventListener( "DOMContentLoaded", play;

 


function play(quiz){
    var question, answer;
    quiz.questions.forEach(function (q){
      question = quiz.question + q.question;
        answer = ask(question);
        check(answer,q);
    });
    gameover();
}

function ask(question){
    update($question,question);
    return prompt(question + " Enter your answer:");
}

function check(answer,q){
    if (answer === q.answer){
        update($feedback,"Correct!","right");
        score++;
        update($score,score);
    }
    else{
        update($feedback,"Wrong!","wrong");
    }
}

function gameover(){
    update($feedback,"Game over, you scored "+score+" points");
}
