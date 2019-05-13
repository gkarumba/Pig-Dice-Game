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
    var player1Play = function(){
        document.documentElement.style.setProperty('--spinTime', '0ms');
        document.documentElement.style.setProperty('--pipBg', '#F32D18');
        document.documentElement.style.setProperty('--pipBgTop', '#520802');
        document.documentElement.style.setProperty('--pipBgBottom', '#F43435');
        $("#display-text").text("");
        $(".role-dice-player2").hide();
        var numberP1 = Math.floor((Math.random() * 6)+1);
        if (numberP1 === 1){
            player1Rolled1();
        }else{
            arrays.forEach(function(array){
                if (numberP1 === array){
                    $("#0").hide();
                    $("#"+numberP1).show();
                }
            })
            console.log(numberP1);
            $("#role-p1-score").text(numberP1);
            totalP1 += numberP1;
            showP1.push(numberP1);
            if(showP1.length === 1){
                var latest = showP1[showP1.length-1];
            }else{
                var latest = showP1[showP1.length-2];
                if(showP1[showP1.length-2] === showP1[showP1.length-1]){
                    $("#"+latest).show();
                }else{
                    $("#"+latest).hide();
                }
            }
            console.log(latest);
            console.log(totalP1);
            $("#score-p1").text(totalP1);
            if (totalP1 > 99){
                $("#display-text").text("Congratulations Player 1, You've Won");
                setTimeout(resetStuff,3000);
            };
        }
    }
    var player2Play = function(){
        document.documentElement.style.setProperty('--spinTime', '0ms');
        document.documentElement.style.setProperty('--pipBg', '#38AF1E');
        document.documentElement.style.setProperty('--pipBgTop', '#247829');
        document.documentElement.style.setProperty('--pipBgBottom', '#47D80F');
        $("#display-text").text("");
        $(".role-dice-player1").hide();
        var numberP2 = Math.floor((Math.random() * 6)+1);
        if(numberP2 === 1){
            player2Rolled1();
        }else{
            arrays.forEach(function(array){
                if (numberP2 === array){
                    $("#0").hide();
                    $("#"+numberP2).show();
                }
            })
            console.log(numberP2);
            $("#role-p2-score").text(numberP2);
            totalP2 += numberP2;
            showP2.push(numberP2);
            if(showP2.length === 1){
                var latest = showP2[showP2.length-1];
            }else{
                var latest = showP2[showP2.length-2];
                if(showP2[showP2.length-2] === showP2[showP2.length-1]){
                    $("#"+latest).show();
                }else{
                    $("#"+latest).hide();
                }
            }
            console.log(totalP2);
            $("#score-p2").text(totalP2);
            if (totalP2 > 99){
                $("#display-text").text("Congratulations Player 2, You've Won");
                setTimeout(resetStuff,3000);
            };
        }
    }
    var player1Hold = function(){
        arrays.forEach(function(array){
            $("#"+array).hide();
        });
        $(".role-dice-player2").show();
        $(".role-dice-player1").hide();
        $("#display-text").text("Player 1 held, player 2 your turn to roll");
        $("#0").show();
    }
})