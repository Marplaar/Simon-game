$("button").on("click", function () {
    // onclick listen selector for button
    new Audio("sounds/" + $(this).text() + ".mp3").play()
    flash_animation(this)
    // play button sound and highlight the clicked button
    if (gamestate === true && answer[i] === $(this).text()) {
        i++ 
        // itterate through the 'answer' array and check that the clicked button is correct
    } else if (gamestate === true) {
        gamestate = false;
        i = 0;
        answer = []
        $("h1").text("You lose. Press any button to try again. (not spacebar or enter)")
        $("h1").css("font-size", "5rem")
        // if incorrect, reset the game and purge 'answer' and set the i iterator to 0
    }
    if (answer.length === i && gamestate === true) {
        generateNextAnswer();
        i = 0
        // if all buttons clicked match 'answer' array, generate next answer and add it to the 'answer' array.
    }
})

function flash_animation(element) {

    $(element).toggleClass("flash")

    setTimeout(function () {
        $(element).removeClass("flash")
    }, 100)

    // flash animation for button click
}

var i = 0
var answer = []
var gamestate = false

// creating variables used within funcitons.

$(document).on("keypress", function () {
// keypress listener on document 
    if (!gamestate) {
        gamestate = true
        i = 0
        generateNextAnswer()
    } 
    // If the game hasn't begun, begin the game and generate the first anwer.
})

function generateNextAnswer() {
    switch (Math.floor(Math.random() * 4 + 1)) {
        case 1:
            var n = "green"
            break;
        case 2:
            var n = "red"
            break;
        case 3:
            var n = "yellow"
            break;
        case 4:
            var n = "blue"
            break;
        default:
            break;
    }
    // switch statement to turn randomly generated number into one of the corresponding colours

    answer.push(n)
    // add the random color generated to the 'answer' array

    $("h1").text("Level " + answer.length)
    // change the heading text to state the current level

    setTimeout(function () {
        $("." + answer[answer.length - 1]).addClass("hidden");
        new Audio("sounds/" + answer[answer.length - 1] + ".mp3").play();
    }, 200);
    // begin animation to display the new item added to the 'answer' array.
    //  added a pause to create a gap between user click and animation start.

    setTimeout(function () {
        $("." + answer[answer.length - 1]).removeClass("hidden")
    }, 400);
    // end animation. Added a further pause to create the animation effect.
}