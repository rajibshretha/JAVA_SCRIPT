// let userScore=0;
// let compScore=0;

// const choices = document.querySelectorAll(".choice");
// const msg=document.querySelector("#msg");
// const userScorepara=document.querySelector("#user-score")
// const compScorepara=document.querySelector("#computer-score")

// const drawgame=()=>{
//      console.log("game was draw");
//      msg.innerText="Draw Please try again"
//      msg.style.backgroundColor="brown";
// }
// const genComputerChoice=()=>{
//      const options=["rock","paper","scissor"];
//      const randIdx=Math.floor(Math.random()*3);
//      return options[randIdx];

// }
// const showWinner=(userWin,userChoice,compChoice)=>{
//      if(userWin){  
//           userScore++;
//           userScorepara.innerText=userScore;
//           console.log("you win");
//           msg.innerText=`You Win Your ${userChoice} beats ${compChoice}`
//           msg.style.backgroundColor="green";
//      }else {
//           compScore++;
//           compScorepara.innerText=compScore;
//           console.log("you lose");
//           msg.innerText=`You Lose Computer ${compChoice} beats ${userChoice}`;
//           msg.style.backgroundColor="red";
//      }
// }

// const playGame=(userChoice)=>{
//      console.log("user choice = " ,userChoice);
//      //generate computer choice -> modular
//      const compChoice = genComputerChoice();
//      console.log("comp choice = " ,compChoice);
//      if(userChoice===compChoice){
//           drawgame();
//      }else{
//           let userWin=true;
//           if(userChoice==="rock"){
//                userWin=compChoice==="paper" ? false : true;
//           }else if(userChoice==="paper"){
//                userWin=compChoice==="scissors" ? false: true;
//           }else{
//                userWin=compChoice==="rock"?false:true;
//           }
//           showWinner(userWin,userChoice,compChoice);
//      }
// }
// choices.forEach(choice => {
     
//      choice.addEventListener("click",()=>{
//           const userChoice=choice.getAttribute("id")
//           playGame(userChoice);
//      })
// })

// april 8 classes and object
const student={
     fullName:"Rajib Shrestha",
     marks:99.99,
     printMarks:function(){
          console.log("marks = ",this.marks);
     },
}
// april 9/10