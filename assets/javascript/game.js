/*jshint esversion: 6 */

//Global variables
var wins=0, loses=0;
var playerTotalScore=0;
var ruby=0;sapphire=0;sapphireYellow=0;emerald=0;
var gemTotal=0;
//random number generator for the crystals
var crystalRandNum= Math.floor(Math.random() * 13)+1;
console.log(crystalRandNum);
//random number generator that the computer generates
var compRandNum= Math.floor(Math.random()*121)+1;
console.log(compRandNum);

   

window.onload = function() {

//this will generate a random number and then display it at #random_number
$('#random_number').html("<h1>" + compRandNum+ "</h1>");
   

};