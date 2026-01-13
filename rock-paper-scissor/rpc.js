let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genComputerChoice=()=>{
     //rock,paper,scissor
     const options=["rock","paper","scissor"];
     const randIdx=Math.floor(Math.random()*3);
     return options[randIdx];
}

const drawGame=()=>{
     console.log("The game was draw")
     msg.innerText="The game was a draw!";
}

const showWinner = (userWin)=>{
     if(userWin){
          console.log("you win!");
          msg.innerText="you win!";
     }else{
          msg.innerText="you lose!";
          console.log("you lose!")
     }
}
const playGame=(userChoice)=>{
     console.log("user choice :",userChoice);
     //generate computer choice
     const compChoice=genComputerChoice();
     console.log("computer choice :",compChoice);

     if(userChoice===compChoice){
          //Draw game
          drawGame();
     }
     else{
          let userWin=true;
          if(userChoice==="rock"){
               userWin = compChoice==="paper" ? false : true;
          }else if(userChoice==="paper"){
               userWin=compChoice==="scissor" ? false : true;
          }else{
               userWin=compChoice==="rock" ? false : true;
          }
          showWinner(userWin);
     }
}
choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
          const userChoice=choice.getAttribute("id");
          playGame(userChoice);
     })
})

