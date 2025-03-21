
const body = document.querySelector("body");
const game = document.querySelector(".game");

const count = document.querySelector("h1");
const reset = document.querySelector(".reset");

const ash = document.querySelector("#ash");
const charmander = document.querySelector("#charmander");
const pikachu = document.querySelector("#pikachu");
const zubat = document.querySelector("#zubat");

let findCharmander = false;
let findPikachu = false;
let findZubat = false;

let gameFinished = false;

const audio = document.querySelector("audio");
audio.volume = 0.1;

const musicControl = document.querySelector(".music-control");

musicControl.addEventListener("click", (Event) => {
    Event.stopPropagation();

    Event.target.src = `${Event.target.src}`.includes("on.png")
        ? "../assets/icons/off.png"
        : "../assets/icons/on.png";

    `${Event.target.src}`.includes("on.png") ? audio.play() : audio.pause()
});

reset.addEventListener("click", () => {
    window.location.reload()
    reset.style.display = "none"
})

function clearCharactersAndFinishGame() {
    ash.style.display = "none";
    pikachu.style.display = "none";
    zubat.style.display = "none";
    charmander.style.display = "none";
    reset.style.display = "block";
    count.textContent = "";
    audio.pause();
}


let currentCount = 60

const interval = setInterval(() => {

    if (currentCount <= 0) {
        game.style.backgroundImage = "url('..//assets/game-over.jpg')";

        clearCharactersAndFinishGame();
        clearInterval(interval);
        return;

    }

    currentCount--;
    count.textContent = currentCount

}, 1000)

function finishGame() {
    if (findCharmander && findPikachu && findZubat) {
        clearCharactersAndFinishGame();

        gameFinished = true;


        const timeOut = setTimeout(() => {
            game.style.backgroundImage = "url('..//assets/winner.jpg')";

            clearInterval(interval)

            clearTimeout(timeOut)

            zubat.style.display = "none";

            audio.pause();
        }, 0)
    }
}


function getRightPosition() {
    return parseInt(ash.style.right.split("px")) || 2;
}

function getTopPosition() {
    return parseInt(ash.style.top.split("px")) || 2;
}

function verifyLookPodemon(to) {

    if (gameFinished) {
        return;
    }

    finishGame()

    const pokemonRightPosition = to === "ArrowLeft" ? `${getRightPosition() - 64}px` : `${getRightPosition() + 64}px`

    if (findCharmander) {
        const newTopPosition = to = "ArrowUp" ? `${getTopPosition() + 18}px` : `${getTopPosition() - 18}px`

        charmander.style.right = pokemonRightPosition
        charmander.style.top = newTopPosition
    }

    if (findPikachu) {
        const newTopPosition = to = "ArrowUp" ? `${getTopPosition() + 76}px` : `${getTopPosition() - 76}px`

        pikachu.style.right = pokemonRightPosition
        pikachu.style.top = newTopPosition
    }

    if (findZubat) {
        const newTopPosition = to = "ArrowUp" ? `${getTopPosition() + 152}px` : `${getTopPosition() - 152}px`

        zubat.style.right = pokemonRightPosition
        zubat.style.top = newTopPosition
    }

    if (getTopPosition() >= 2 && getTopPosition() <= 98 && getRightPosition() >= 130 && getRightPosition() <= 216) {
        charmander.style.display = "block";
        findCharmander = true;
        return;
    }
    if (getTopPosition() >= 474 && getTopPosition() <= 594 && getRightPosition() <= 138 && getRightPosition() >= 42) {
        zubat.style.display = "block";
        findZubat = true;
        return;
    }
    if (getTopPosition() >= 266 && getTopPosition() <= 394 && getRightPosition() >= 546 && getRightPosition() <= 650) {
        pikachu.style.display = "block";
        findPikachu = true;
        return;
    }
}

body.addEventListener("keydown", (Event) => {
    Event.stopPropagation();

    switch (Event.code) {

        case 'ArrowLeft':
            if (getRightPosition() < 770) {
                ash.style.right = `${getRightPosition() + 8}px`;
                ash.src = "../assets/left.png";
            }
            break;

        case 'ArrowRight':
            if (getRightPosition() > 2) {
                ash.style.right = `${getRightPosition() - 8}px`;
                ash.src = "../assets/right.png";
            }
            break;

        case 'ArrowDown':
            if (getTopPosition() < 625) {
                ash.style.top = `${getTopPosition() + 8}px`;
                ash.src = "../assets/front.png";
            }
            break;

        case 'ArrowUp':
            if (getTopPosition() > 2) {
                ash.style.top = `${getTopPosition() - 8}px`;
                ash.src = "../assets/back.png";
            }
            break;

        default:
            break;
    }

    verifyLookPodemon(Event.code);

});







