let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#users-score");
const compScorePara=document.querySelector("#comp-score");



const genCompChoice=() =>{
    const option=["rock", "paper", "scissor"];
    const randIdx =Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame= () =>{
    console.log("Game was Draw")
    msg.innerText="Draw the game..! Play Again";
};

const showWinner=(userWin) =>{
    if (userWin)
    {
        console.log("userwin");
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
        userScore ++;
        userScorePara.innerText=userScore;


    }
    else{
        console.log("you lose")
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;

    }
}

const playGame= (userChoice) =>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice=",compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }else{
        let userWin=true;
        if(userChoice === "rock")
        {
            // paper, scissor
            userWin = compChoice==="papar"? false: true;
        }else if(userChoice === "paper"){
            // rock ,scissor
           userWin = compChoice === "scissor"? false:true;
        }
        else{
            // rock paper
            compChoice ==="rock"?false: true; 
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       const userChoice=choice.getAttribute("id");
       console.log("choice was",userChoice);
        playGame(userChoice);
    })
});