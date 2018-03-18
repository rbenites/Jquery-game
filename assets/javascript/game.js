/*jshint esversion: 6 */

//Global variables
var wins = 0, losses = 0;
var playerTotalScore = 0;
var ruby = 0; sapphire = 0; sapphireYellow = 0; emerald = 0;
var gemTotal = 0;

//random number generator for the crystals
//var crystalRandNum= Math.floor(Math.random() * 13)+1;
//console.log(crystalRandNum);
//random number generator that the computer generates
var compRandNum = Math.floor(Math.random() * 121) + 1;
console.log(compRandNum);



window.onload = function () {
    //this will generate a random number and then display it at #random_number
    $('#random_number').html("<h1>" + compRandNum + "</h1>");

    //check to see if the crystals have been clicked on already
    //if()


    //this will track when the ruby button is clicked

    $("#ruby").on("click", function () {
        if (ruby === 0) {
            var crystalRandNum = Math.floor(Math.random() * 13) + 1;
            ruby += crystalRandNum;
            gemTotal += ruby;
            $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
            console.log(gemTotal + " gemtotal");
            console.log(crystalRandNum + " crystal");
            console.log(ruby + " ruby");
        } else if(gemTotal<compRandNum){
            gemTotal += ruby;
            $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
            console.log(gemTotal + " this is else");
            console.log(ruby + " this is else");
        }else if (gemTotal===compRandNum){
            wins++;
            $("#wins").html("<h3>" + wins + "</h3>");
            console.log(wins);
        }else{
            losses++;
            $("#losses").html("<h3>" + losses + "</h3>");
            console.log(losses);
        }
    });

    };