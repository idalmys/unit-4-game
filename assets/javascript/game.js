$(document).ready(function() {

    // Variables's initialization 
    var win = 0;
    var losse = 0;
    var numberGuess = 0;
    var result = 0;
    var crystalNumber = [];
    var rubi = $("#rubi");
    var diamante = $("#diam");
    var esmeralda = $("#esmeralda");
    var zafiro = $("#zafiro");
    var divID = "";
    var numberGuessvalue = 0


    function restartVariables(){
        
        numberGuess = 0;
       result = 0;
        crystalNumber = [];
        rubi = $("#rubi");
        diamante = $("#diam");
        esmeralda = $("#esmeralda");
        zafiro = $("#zafiro");
        divID = "";
        numberGuessvalue = 0
    }


    function random(max, min){
        
        numberGuess = Math.floor(Math.random() * (max - min + 1) + min);
    }

    function crystalValues(){
        
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
    crystalValues();

    $(".img-size").on("click", function() {
        
      
      
       result += parseInt($(this).attr("value"));
        $("#scores").text(result);
        
        if(result === numberGuessvalue){
            win ++;           
            restartVariables();
            random(120, 19);
            restartValues();
            crystalValues();      
        }else if(result > numberGuessvalue){
           
            losse ++;
            restartVariables();
            random(120, 19);          
            restartValues();
            crystalValues();  
        }
        
    });

})