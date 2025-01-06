let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll('.img');
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector('#uscore');
const compScorePara = document.querySelector('#comscore');

const genComp = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}

const drawGame = () => {
    // console.log('game was draw.');
    msg.innerText = "Game was Draw! Paly again";
    msg.style.backgroundColor = "yellow";
}

const showWiner = (userWin, choiceId, compChoice) =>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        // console.log('you win!');
        msg.innerText = `You win! Your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        comscore++;
        compScorePara.innerText = comscore;
        // console.log('you lose!');
        msg.innerText =  `You lose! ${compChoice} beats Your ${choiceId}`;
        msg.style.backgroundColor = "blue";
    }
}

const playGame = (choiceId) => {
    // console.log('choiceId =',choiceId);
    const compChoice = genComp();
    // console.log("comp choice = ",compChoice);

    if(choiceId == compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(choiceId === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(choiceId === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWiner(userWin, choiceId, compChoice);
    }
};

choices.forEach((img) => {
    img.addEventListener("click",() => {
        const choiceId = img.getAttribute("id");
        // console.log("choice was clicked",choiceId);
        playGame(choiceId);
    });
});
