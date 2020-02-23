$(document).ready(function() {

    
    var win = 0;
        losse = 0;
        numberGuess = 0;
        result = 0;
        crystalNumber = [];
        rubi = $("#rubi");
        diamante = $("#diam");
        esmeralda = $("#esmeralda");
        zafiro = $("#zafiro");
        numberGuessvalue = 0


    function restart_html_values(){
        
        numberGuess = 0;
        result = 0;
        crystalNumber = [];
        rubi = $("#rubi");
        diamante = $("#diam");
        esmeralda = $("#esmeralda");
        zafiro = $("#zafiro");
      
        numberGuessvalue = 0
    }


    function random(max, min){
        
        numberGuess = Math.floor(Math.random() * (max - min + 1) + min);
    }

    function crystal_random(){
        
        for (var i = 0; i < 4; i++) {
            random(12, 1);
            crystalNumber.push(numberGuess);  
        }
        
        rubi.attr("value", crystalNumber[0]);
        diamante.attr("value", crystalNumber[1]);
        esmeralda.attr("value", crystalNumber[2]);
        zafiro.attr("value", crystalNumber[3]);
    }
    
    function restartValues(){
       
        $("#number").text(numberGuess);
        numberGuessvalue = numberGuess;
        $("#wins").text(win);
        $("#losses").text(losse);
        $("#scores").text(result);
    }

    random(120, 19);    
    restartValues();
    crystal_random();

    $(".img-size").on("click", function() {
        
      
      
       result += parseInt($(this).attr("value"));
        $("#scores").text(result);
        
        if(result === numberGuessvalue){
            win ++;           
            restart_html_values();
            random(120, 19);
            restartValues();
            crystal_random();      
        }else if(result > numberGuessvalue){
           
            losse ++;
            restart_html_values();
            random(120, 19);          
            restartValues();
            crystal_random();  
        }
        
    });

})