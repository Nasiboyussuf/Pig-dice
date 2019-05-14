var playerOne;
var playerTwo;
var diceRoll;
player1Score = 0;
player2Score = 0;
totalScore1 = 0;
totalScore2 = 0;
var totalScore1, totalScore2;

$(document).ready(function () {
    $("#dispRules").click(function () {
        $(".hidden_rules").toggle(100);
    });
    $("#playerName").submit(function (event) {
        event.preventDefault();
        playerOne = $("#firstName").val();
        playerTwo = $("#secondName").val();
        $("#playerName").toggle(100);
        $(".player1").text(playerOne);
        $(".player2").text(playerTwo);
       c $(".gameContainer").toggle();
        $(".newGame").toggle();
    });
    $("#rollBtn2, #holdBtn2").hide();
    $("#rollBtn1").click(function () {
        diceRoll = Math.floor(Math.random() * 6) + 1;
        if ( totalScore1 >= 100) {
            alert("Hongera!!!!" + playerOne);
        }
        else if (diceRoll === 1) {
            alert("Umebonyeza moja!!!! Tafadhali jaribu tena");
            player1Score = 0;
            $("#kwanza").text(player1Score);
            $("#rollBtn1, #holdBtn1").toggle();
            $("#rollBtn2, #holdBtn2").toggle();
        }
        else {
            $("#value1").text(diceRoll);
            player1Score += diceRoll;
            $("#kwanza").text(player1Score);
        }
        console.log(diceRoll);
    });
    $("#holdBtn1").click(function () {
        totalScore1 += player1Score;
        $(".player1-score").text(totalScore1);
        $("#rollBtn1, #holdBtn1").toggle();
        $("#rollBtn2, #holdBtn2").toggle();
        player1Score = 0;
        $("#kwanza").text(player1Score);
    });
    $("#rollBtn2").click(function () {
        diceRoll = Math.floor(Math.random() * 6) + 1;

        if (diceRoll === 1) {
            alert("Umebonyeza moja!!!! Tafadhali jaribu tena");
            player2Score = 0;
            $("#pili").text(player2Score);
            $("#rollBtn1, #holdBtn1").toggle();
            $("#rollBtn2, #holdBtn2").toggle();
        }
        else {
            $("#value2").text(diceRoll);
            player2Score += diceRoll;
            $("#pili").text(player2Score);
        }
        if (totalScore2 >= 100) {
            alert("Hongera!!!!" + playerTwo);
        };
    });
    $("#holdBtn2").click(function () {
        totalScore2 += player2Score;
        $(".player2-score").text(totalScore2);
        $("#rollBtn1, #holdBtn1").toggle();
        $("#rollBtn2, #holdBtn2").toggle();
        player2Score = 0;
        $("#pili").text(player2Score);

    });
});
