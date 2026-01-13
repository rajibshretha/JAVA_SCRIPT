let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score")
const compScorepara=document.querySelector("#computer-score")

const genComputerChoice=()=>{
     //rock,paper,scissor
     const options=["rock","paper","scissor"];
     const randIdx=Math.floor(Math.random()*3);
     return options[randIdx];
}

const drawGame=()=>{
     msg.innerText="The game was a draw!";
     msg.style.backgroundColor="grey";
     
}

const showWinner = (userWin,userChoice,compChoice)=>{
     if(userWin){
          userScore++;

          userScorepara.innerText=userScore;
          msg.innerText=`you win! Your ${userChoice} beats ${compChoice}`;
          msg.style.backgroundColor="green";
     }else{
          compScore++;          
          msg.style.backgroundColor="red";
          compScorepara.innerText=compScore;
          msg.innerText=`you lose!  ${compChoice} beats Your ${userChoice}`;
          
     }
}
const playGame=(userChoice)=>{
    
     //generate computer choice
     const compChoice=genComputerChoice();
    

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
          showWinner(userWin,userChoice,compChoice);
     }
}
choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
          const userChoice=choice.getAttribute("id");
          playGame(userChoice);
     })
})

