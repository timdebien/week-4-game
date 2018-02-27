$(document).ready(function(){

var computerNumber = Math.floor(Math.random()*112  + 19)

var numberOne = Math.floor(Math.random()*11 + 1)
var numberTwo = Math.floor(Math.random()*11 + 1)
var numberThree = Math.floor(Math.random()*11 + 1)
var numberFour = Math.floor(Math.random()*11 + 1)

var wins = 0;
var losses = 0;
var humanScore = 0;
$("#computer-score").html(computerNumber);
$("#wins").html(wins);
$("#losses").html(losses);

$("#one").on ("click", function(){
    humanScore = humanScore + numberOne;
  
    if(humanScore === computerNumber){
    wins ++;
}
    else if(humanScore > computerNumber){
    losses ++;
}
$("#my-score").html(humanScore);

});

$("#two").on ("click", function(){
    humanScore = humanScore + numberTwo;
    console.log("humanScore" + humanScore);
    $("#my-score").html(humanScore);
    
    if(humanScore === computerNumber){
    wins ++;
}
    else if(humanScore > computerNumber){
    losses ++;
}


});

$("#three").on ("click", function(){
    humanScore = humanScore + numberThree;
    console.log("humanScore" + humanScore);
    
    if(humanScore === computerNumber){
    wins ++;
}
    else if(humanScore > computerNumber){
    losses ++;
}
$("#my-score").html(humanScore);
});

$("#four").on ("click", function(){
    humanScore = humanScore + numberFour;
    
    if(humanScore === computerNumber){
    wins ++;
}
    else if(humanScore > computerNumber){
    losses ++;
}
$("#my-score").html(humanScore);

});
});