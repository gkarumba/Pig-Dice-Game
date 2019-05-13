// class Player{
//     constructor(name,total,show){
//         this.name = name;
//         this.total = total;
//         this.show = show;
//     }
// var player1 = new Player() ;
var totalP1 = 0;
var totalP2 = 0;
var arrays = [1,2,3,4,5,6];
var showP1 = [];
var showP2 = [];
var arrays = [1,2,3,4,5,6];
$(document).ready(function(){
    arrays.forEach(function(array){
        $("#"+array).hide();
    });
    var resetStuff = function(){
        arrays.forEach(function(array){
            $("#"+array).hide();
            totalP1 = 0;
            totalP2 = 0;
            $("#score-p1").text(totalP1);
            $("#score-p2").text(totalP2);
            $(".role-dice-player2").show();
            $(".role-dice-player1").show();
            $("#display-text").text("Start Game");
        });
    }
    
})