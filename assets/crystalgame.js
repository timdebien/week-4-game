$(document).ready(function () {
    var computerNumber;

    var numberOne;
    var numberTwo;
    var numberThree;
    var numberFour;

    var wins = 0;
    var losses = 0;
    var humanScore;

    function reset() {
        computerNumber = Math.floor(Math.random() * 112 + 19)
        $("#computer-score").html(computerNumber);
        numberOne = Math.floor(Math.random() * 11 + 1)
        numberTwo = Math.floor(Math.random() * 11 + 1)
        numberThree = Math.floor(Math.random() * 11 + 1)
        numberFour = Math.floor(Math.random() * 11 + 1)

      
        humanScore = 0;
    }
    reset();

    $("#computer-score").html(computerNumber);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $(".gempic").on("click", function(){
        console.log('you clicked on', this);
    })
    $("#one").on("click", function () {
        humanScore = humanScore + numberOne;

        if (humanScore === computerNumber) {
            wins++;
            reset();
            $("#wins").html(wins);
        }
        else if (humanScore > computerNumber) {
            losses++;
            reset();
            $("#losses").html(losses);
        }
        $("#my-score").html(humanScore);

    });

    $("#two").on("click", function () {
        humanScore = humanScore + numberTwo;
        console.log("humanScore" + humanScore);
        $("#my-score").html(humanScore);

        if (humanScore === computerNumber) {
            wins++;
            reset();
            $("#wins").html(wins);
        }
        else if (humanScore > computerNumber) {
            losses++;
            reset();
            $("#losses").html(losses);
        }


    });

    $("#three").on("click", function () {
        humanScore = humanScore + numberThree;
        console.log("humanScore" + humanScore);

        if (humanScore === computerNumber) {
            wins++;
            reset();
            $("#wins").html(wins);
        }
        else if (humanScore > computerNumber) {
            losses++;
            reset();
            $("#losses").html(losses);
        }
        $("#my-score").html(humanScore);
    });

    $("#four").on("click", function () {
        humanScore = humanScore + numberFour;

        if (humanScore === computerNumber) {
            wins++;
            reset();
            $("#wins").html(wins);

        }
        else if (humanScore > computerNumber) {
            losses++;
            reset();
            $("#losses").html(losses);

        }
        $("#my-score").html(humanScore);

    });
   
});