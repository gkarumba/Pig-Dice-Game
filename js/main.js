class Player{
    constructor(total,show){
        this.total = total;
        this.show = show;
    }
}
var player1 = new Player(0,0) ;
var player2 = new Player(0,0);

player1.total = 0;
player2.total = 0;
var arrays = [1,2,3,4,5,6];
player1.show = [];
player2.show = [];

$(document).ready(function(){
    arrays.forEach(function(array){
        $("#"+array).hide();
    });
    var resetStuff = function(){
        arrays.forEach(function(array){
            $("#"+array).hide();
            player1.total = 0;
            player2.total = 0;
            $("#score-p1").text(player1.total);
            $("#score-p2").text(player2.total);
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
            player1.total += numberP1;
            player1.show.push(numberP1);
            if(player1.show.length === 1){
                var latest = player1.show[player1.show.length-1];
            }else{
                var latest = player1.show[player1.show.length-2];
                if(player1.show[player1.show.length-2] === player1.show[player1.show.length-1]){
                    $("#"+latest).show();
                }else{
                    $("#"+latest).hide();
                }
            }
            console.log(latest);
            console.log(player1.total);
            $("#score-p1").text(player1.total);
            if (player1.total > 99){
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
            player2.total += numberP2;
            player2.show.push(numberP2);
            if(player2.show.length === 1){
                var latest = player2.show[player2.show.length-1];
            }else{
                var latest = player2.show[player2.show.length-2];
                if(player2.show[player2.show.length-2] === player2.show[player2.show.length-1]){
                    $("#"+latest).show();
                }else{
                    $("#"+latest).hide();
                }
            }
            console.log(player2.total);
            $("#score-p2").text(player2.total);
            if (player2.total > 99){
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
    var player2Hold = function(){
        arrays.forEach(function(array){
            $("#"+array).hide();
        });
        $(".role-dice-player1").show();
        $(".role-dice-player2").hide();
        $("#display-text").text("Player 2 held, player 1 your turn to roll");
        $("#0").show();
    }
    var player1Rolled1 = function(){
        arrays.forEach(function(array){
            $("#"+array).hide();
        });
        $(".role-dice-player2").show();
        $(".role-dice-player1").hide();
        $("#display-text").text("Player 1 rolled a 1,Player 2 your turn to roll");
        $("#0").show();
    }
    var player2Rolled1 = function(){
        arrays.forEach(function(array){
            $("#"+array).hide();
        });
        $(".role-dice-player1").show();
        $(".role-dice-player2").hide();
        $("#display-text").text("Player 2 rolled a 1,Player 1 your turn to roll");
        $("#0").show();
    }
    $("button#role-p1-btn").click(function(){
        document.documentElement.style.setProperty('--spinTime', '500ms');
        setTimeout(player1Play, 1000);
    });
    $("button#role-p2-btn").click(function(){
        document.documentElement.style.setProperty('--spinTime', '500ms');
        setTimeout(player2Play, 1000);
    });
    $("button#hold-p1-btn").on('click',player1Hold);
    $("button#hold-p2-btn").on('click',player2Hold);
    $("#display-text").click(function (){
        $("#instructions").show();
    });
    $("#instructions").click(function (){
        $("#display-text").show();
        $("#instructions").hide();
    })
})