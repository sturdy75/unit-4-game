var randomNum = Math.floor((Math.random() * 101) + 19);
var crystals = [1, 2, 3, 4]
var yourCurrentScore = 0;
var wins = 0;
var losses = 0;




var imageCrystal = $("<img>");
imageCrystal.addClass("crystal-image");
imageCrystal.attr("src", "assets/images/Crystal1.jpg");
imageCrystal.attr("data-crystalvalue", Math.floor((Math.random() * 12) +1));
$("#crystals").append(imageCrystal);

var imageCrystal = $("<img>");
imageCrystal.addClass("crystal-image");
imageCrystal.attr("src", "assets/images/crystal2.jpg");
imageCrystal.attr("data-crystalvalue", Math.floor((Math.random() * 12) +1));
$("#crystals").append(imageCrystal);

var imageCrystal = $("<img>");
imageCrystal.addClass("crystal-image");
imageCrystal.attr("src", "assets/images/crystal3.jpg");
imageCrystal.attr("data-crystalvalue", Math.floor((Math.random() * 12) +1));
$("#crystals").append(imageCrystal);

var imageCrystal = $("<img>");
imageCrystal.addClass("crystal-image");
imageCrystal.attr("src", "assets/images/crystal4.jpg");
imageCrystal.attr("data-crystalvalue", Math.floor((Math.random() * 12) +1));
$("#crystals").append(imageCrystal);

$(".crystal-image").on("click", function(){

    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    yourCurrentScore += crystalValue;
    $("#yourCurrentScore").text("Your current score: " + crystalValue);

    if (yourCurrentScore === computerNum){
        wins++;
        yourCurrentScore = 0;
    }
    else if (yourCurrentScore > computerNum) {
        losses++;
        yourCurrentScore = 0;
    }

    
    $("#scoreToMatch").text("Score to match: " +randomNum);
    $("#computerNum").text(crystalValue);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("#losses: " + losses);
});


