let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const userScorePara=document.querySelector("#user");
const compScorePara=document.querySelector("#computer");
const msg= document.querySelector("#msg");

const genCompChoice = () => {
    let opt =["rock","paper","scissor"];
    const random= Math.floor(Math.random()*3);

    return opt[random];
}
const drawGame= () =>{
    msg.innerText="Game was Draw. Play Again. ";
    msg.style.backgroundColor="black";
}
const showWinner =(userWin,userChoice,CompChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame = (userChoice) =>{
    const CompChoice=genCompChoice();

    if(userChoice === CompChoice){
        drawGame();
    }else{
        let userWin= true;
        if(userChoice === "rock"){
            userWin = CompChoice === "paper" ? false :true;
        }else if(userChoice === "paper"){
            userWin = CompChoice ==="scissor" ? false:true;
        }else{
            userWin = CompChoice ==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,CompChoice);
    }
    
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});