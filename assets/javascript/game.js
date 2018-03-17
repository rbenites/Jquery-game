/*jshint esversion: 6 */

//Global variables
var wins=0, loses=0;
var compRandNum=0;
var playerTotalScore=0;
var ruby=0;sapphire=0;sapphireYellow=0;emerald=0;
var gemTotal=0;


$(document).ready(() => {
    $('#ruby').on('click',()=>{

    })


//random number generator that the player will guess
function random_num(){
    Math.floor((Math.random()*120)+19);
}

//random number generator for the crystals
function random_crystal_num(){
Math.floor((Math.random()*12)+1);
}
//add an event listener to watch for the button click on the gems
$('col-xs-2 col-md-3').on("click",()=>{

)}



}