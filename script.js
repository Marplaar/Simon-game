$("button").on("click", function () {
    new Audio("sounds/" + $(this).text() + ".mp3").play()

    flash_animation(this)

    if (gamestate === true && answer[i] === $(this).text()) {
        i++
        console.log("here")
    } else if (gamestate === true) {
        gamestate = false;
        i = 0;
        console.log("You lose")
        answer = []
        $("h1").text("You lose. Press any button to try again.")
    }

    if (answer.length === i && gamestate === true) {
        console.log("Generating next answer")
        generateNextAnswer();
        i = 0
        console.log(answer)
        console.log("herehrhe")
    }
})


function flash_animation(element) {

    $(element).toggleClass("flash")

    setTimeout(function () {
        $(element).removeClass("flash")
    }, 100)
}

var i = 0
var answer = []
var gamestate = false

$(document).on("keypress", function () {

    if (!gamestate) {
        gamestate = true
        i = 0
        generateNextAnswer()


        console.log("Gamestate is now true.")
        console.log(answer[i])
    }
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

    answer.push(n)

    $("h1").text("Level " + answer.length)

    answer.forEach(iterator => {

        $(`.${iterator}`).addClass("hidden")
        new Audio("sounds/" + iterator + ".mp3").play()

        setTimeout(function () {
            $(`.${iterator}`).removeClass("hidden")
        }, 500)
    });
}
