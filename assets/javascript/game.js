/*jshint esversion: 6 */

//Global variables
var wins = 0, losses = 0;
var playerTotalScore = 0;
var ruby = 0; sapphire = 0; sapphireYellow = 0; emerald = 0;
var gemTotal = 0;
var crystalRandNum=0;

//random number generator that the computer generates
var compRandNum = Math.floor(Math.random() * 121) + 1;
console.log(compRandNum);


window.onload = function () {
    //this will generate a random number and then display it at #random_number
    $('#random_number').html("<h1>" + compRandNum + "</h1>");

    //this will track when the ruby button is clicked
    $("#ruby").on("click", function () {
        if (ruby === 0) {
            crystalRandNum = Math.floor(Math.random() * 13) + 1;
            ruby += crystalRandNum;
            gemTotal += ruby;
            $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
            console.log("----------------------------");
            console.log(gemTotal + " ruby gemtotal");
            console.log(crystalRandNum + " ruby crystal");
            console.log(ruby + " ruby");
        } else if (gemTotal < compRandNum) {
            gemTotal += ruby;
            $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
            console.log("----------------------------");
            console.log(gemTotal + " ruby this is elseif1");
            console.log(ruby + " ruby this is elseif1");
        } else if (gemTotal === compRandNum) {
            wins++;
            $("#wins").html("<h3>" + wins + "</h3>");
            console.log("----------------------------");
            console.log(gemTotal + " ruby this is elseif2");
            console.log(ruby + " ruby this is elseif3");
            console.log(wins);

        } else {
            losses++;
            $("#losses").html("<h3>" + losses + "</h3>");
            console.log("----------------------------");
            console.log(gemTotal + " ruby this is else3");
            console.log(ruby + " ruby this is else3");
            console.log(losses);
        }
    });

    //this will track when the sapphire button is clicked
    $("#sapphire").on("click", function () {
        if (sapphire === 0) {
            crystalRandNum = Math.floor(Math.random() * 13) + 1;
            sapphire += crystalRandNum;
            gemTotal += sapphire;
            $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
            console.log("----------------------------");
            console.log(gemTotal + " sapphire gemtotal");
            console.log(crystalRandNum + " sapphire crystal");
            console.log(sapphire + " sapphire");
        } else if (gemTotal < compRandNum) {
            gemTotal += sapphire;
            $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
            console.log("----------------------------");
            console.log(gemTotal + " sapphire this is else1");
            console.log(sapphire + " sapphire this is else1");
        } else if (gemTotal === compRandNum) {
            wins++;
            $("#wins").html("<h3>" + wins + "</h3>");
            console.log("----------------------------");
            console.log(gemTotal + " sapphire this is else2");
            console.log(sapphire + " sapphire this is else2");
            console.log(wins);
        } else {
            losses++;
            $("#losses").html("<h3>" + losses + "</h3>");
            console.log("----------------------------");
            console.log(gemTotal + " sapphire this is else3");
            console.log(sapphire + " sapphire this is else3");
            console.log(losses);
        }
    });
    //this will track when the sapphireYellow button is clicked
    $("#yellow_sapphire").on("click", function () {
        if (sapphireYellow === 0) {
            crystalRandNum = Math.floor(Math.random() * 13) + 1;
            sapphireYellow += crystalRandNum;
            gemTotal += sapphireYellow;
            $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
            console.log("----------------------------");
            console.log(gemTotal + " sapphireYellow gemtotal");
            console.log(crystalRandNum + " sapphireYellow crystal");
            console.log(sapphireYellow + " sapphireYellow yellow_sapphire");
        } else if (gemTotal < compRandNum) {
            gemTotal += sapphireYellow;
            $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
            console.log("----------------------------");
            console.log(gemTotal + " sapphireYellow this is else1");
            console.log(sapphireYellow + " sapphireYellow this is else1");
        } else if (gemTotal === compRandNum) {
            wins++;
            $("#wins").html("<h3>" + wins + "</h3>");
            console.log("----------------------------");
            console.log(gemTotal + " sapphireYellow this is else2");
            console.log(sapphireYellow + " sapphireYellow this is else2");
            console.log(wins);
        } else {
            losses++;
            $("#losses").html("<h3>" + losses + "</h3>");
            console.log("----------------------------");
            console.log(gemTotal + " sapphireYellow this is else3");
            console.log(sapphireYellow + " sapphireYellow this is else3");
            console.log(losses);
        }
    });
    //this will track when the emerald button is clicked
    $("#emerald").on("click", function () {
        if (emerald === 0) {
            crystalRandNum = Math.floor(Math.random() * 13) + 1;
            emerald += crystalRandNum;
            gemTotal += emerald;
            $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
            console.log("----------------------------");
            console.log(gemTotal + " gemtotal");
            console.log(crystalRandNum + " crystal");
            console.log(emerald + " emerald");
        } else if (gemTotal < compRandNum) {
            gemTotal += emerald;
            $("#gemTotal").html("<h1>" + gemTotal + "</h1>");
            console.log("----------------------------");
            console.log(gemTotal + " this is else");
            console.log(emerald + " this is else");
        } else if (gemTotal === compRandNum) {
            wins++;
            $("#wins").html("<h3>" + wins + "</h3>");
            console.log("----------------------------");
            console.log(wins);
        } else {
            losses++;
            $("#losses").html("<h3>" + losses + "</h3>");
            console.log("----------------------------");
            console.log(losses);
        }
    });

};