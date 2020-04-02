
buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
var song;
var i;

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * (3 + 1));
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    showCue(gamePattern[gamePattern.length - 1]);

}

function showCue(gamePattern) {


    $("." + gamePattern).delay(0).fadeOut(500).fadeIn(100);
    song = new Audio("sounds/" + gamePattern + ".mp3");
    song.play();


}
function selected(gamePattern) {



    $("." + gamePattern).toggleClass("pressed");
    setTimeout(function () {
        $("." + gamePattern).toggleClass("pressed");
    }, 50);
    song = new Audio("sounds/" + gamePattern + ".mp3");
    song.play();


}
function checkPattern(a, b) {


    if (a === gamePattern[b - 1]) {
        console.log(b)
        if (gamePattern.length === b) {
            $("#level-title").text("Level " + gamePattern.length);
            i = 0;
            nextSequence();
        }

    }
    else {
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 10);
            song = new Audio("sounds/wrong.mp3");
            song.play();
        $(".btn").unbind();
       
        gamePattern = [];

        $(".btn").click(function () {
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 10);
            song = new Audio("sounds/wrong.mp3");
            song.play();
            selected(this.getAttribute("id"));

            
        });
        $(document).keypress(function () {
            $(".btn").unbind();
            $("#level-title").text("Level 1");
            i = 1;
            nextSequence();
            $(".btn").click(function () {

                selected(this.getAttribute("id"));
        
                checkPattern(this.getAttribute("id"), i);
                i++;
            })
            $(document).unbind();


        });

    }
}









$(document).keypress(function (event) {
    $("#level-title").text("Level 1");
    i = 1;
    nextSequence();
    $(".btn").click(function () {

        selected(this.getAttribute("id"));

        checkPattern(this.getAttribute("id"), i);
        i++;
    })
    $(document).unbind();


});


