let userscore = 0;
let pcscore = 0;

let btnrule = document.getElementById("buttonrule");
let rulebox = document.getElementById("ruleb");
let exitrule = document.getElementById("exit");
let rockus = document.getElementById("rock");
let scissorus = document.getElementById("scissor");
let paperus = document.getElementById("paper");
let options = document.getElementById("options");
let result = document.getElementById("result");
let userwon = document.getElementById("userwin");
let pcwon = document.getElementById("pcwin");
let resh1 = document.getElementById("whowon");
let resh2 = document.getElementById("h2res");
let btnagain = document.getElementById("playagain");
let labelpc = document.getElementById("pcs");
let labeluser = document.getElementById("uss");
let humanscr = document.getElementById("humanscr");
let aiscr = document.getElementById("aiscr");
let btnend = document.getElementById("buttonendgame");
let reset = document.getElementById("buttonresetgame");

btnend.addEventListener("click", function () {
    checkScoresAndRedirect();
});

function checkScoresAndRedirect() {
    if (pcscore < userscore) {
        redirectToWinPage();
    }
}

function redirectToWinPage() {
    window.location.href = "winner_celebrations.html";
}

function updateScore() {
    aiscr.innerText = pcscore;
    humanscr.innerText = userscore;
    localStorage.setItem("pc", Number(pcscore));
    localStorage.setItem("user", Number(userscore));
}

function handleItemClick(choicePickedFunc) {
    choicePickedFunc();
    componentonclick();
    updateScore();
}

rockus.addEventListener("click", () => handleItemClick(rockpicked));
scissorus.addEventListener("click", () => handleItemClick(scissorpicked));
paperus.addEventListener("click", () => handleItemClick(paperpicked));

btnagain.addEventListener("click", () => {
    result.style.display = "none";
    options.style.display = "flex";
    ["rock", "paper", "scissor"].forEach((cls) => {
        labelpc.classList.remove(cls);
        labeluser.classList.remove(cls);
    });
});

function componentonclick() {
    options.style.display = "none";
    result.style.display = "flex";
}
function userwins() {
    userscore += 1;
    userwon.style.display = "flex";
    pcwon.style.display = "none";
    btnagain.innerText = "PLAY AGAIN";
    resh2.innerText = "AGAINST PC";
    resh1.innerText = "YOU WIN";
}
function pcwins() {
    pcscore += 1;
    userwon.style.display = "none";
    pcwon.style.display = "flex";
    btnagain.innerText = "PLAY AGAIN";
    resh2.innerText = "AGAINST PC";
    resh1.innerText = "YOU LOST";
}
function tie() {
    userwon.style.display = "none";
    pcwon.style.display = "none";
    resh1.innerText = "TIE UP";
    resh2.innerText = "";
    btnagain.innerText = "REPLAY";
}
function RuleFunction() {
    if (rulebox.style.display === "none") {
        rulebox.style.display = "flex";
    } else {
        rulebox.style.display = "none";
    }
}
exitrule.addEventListener("click", () => {
    rulebox.style.display = "none";
});

function genericPicked(userChoice) {
    const choices = ["rock", "scissor", "paper"];
    labeluser.classList.add(userChoice);
    console.log(userChoice);
    let pcpicked = randompicker();
    let pcChoice = choices[pcpicked];
    labelpc.classList.add(pcChoice);
    console.log(`pc picks ${pcChoice}`);
    if (pcpicked === choices.indexOf(userChoice)) {
        console.log("Tie");
        tie();
    } else if ((pcpicked - choices.indexOf(userChoice) + 3) % 3 === 1) {
        console.log("pc wins");
        pcwins();
    } else {
        console.log("user wins");
        userwins();
    }
}

function rockpicked() {
    genericPicked("rock");
}

function scissorpicked() {
    genericPicked("scissor");
}

function paperpicked() {
    genericPicked("paper");
}

function randompicker() {
    const ai = Math.floor(Math.random() * 3);
    console.log(`pc:${["rock", "scissor", "paper"][ai]}`);
    return ai;
}

function updateScores() {
    const pcScore = localStorage.getItem("pc");
    const userScore = localStorage.getItem("user");

    if (pcScore !== null) {
        pcscore = Number(pcScore);
        aiscr.innerText = pcscore;
    } else {
        pcscore = 0;
        aiscr.innerText = pcscore;
    }

    if (userScore !== null) {
        userscore = Number(userScore);
        humanscr.innerText = userscore;
    } else {
        userscore = 0;
        humanscr.innerText = userscore;
    }
}
updateScores();
