let userscore = 0;
let computerscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let a  = document.querySelector("#user-score");
let b = document.querySelector("#comp-score");

choices.forEach((elements) => {
    elements.addEventListener("click", () => {
        const userchoice = elements.getAttribute("id");
        playgame(userchoice);
    });
});

const playgame = (userchoice) => {
    console.log("userchoice  =  " + userchoice);
    const comchoice = computerchoice();
    console.log("computerchoice  =  " + comchoice);

    if (userchoice === comchoice) {
        console.log("It's a draw game");
        msg.innerHTML = "It's a draw!";
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = comchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = comchoice === "scissors" ? false : true;
        } else { // userchoice === "scissors"
            userwin = comchoice === "rock" ? false : true;
        }
        showWinner(userwin, comchoice, userchoice);
    }
};

const showWinner = (userwin, comchoice, userchoice) => {
    if (userwin) {
        userscore++;
        a.innerHTML = userscore;
        console.log("You Win!");
        msg.innerHTML = `You Win! Computer chose ${comchoice}`;
    } else {
        computerscore++;
        b.innerHTML = computerscore;
        console.log("You Lost!");
        msg.innerHTML = `You Lost! Computer chose ${comchoice}`;
    }
};

const computerchoice = () => {
    const gencomp = ["rock", "paper", "scissors"];
    const a = Math.floor(Math.random() * 3);
    return gencomp[a];
};
