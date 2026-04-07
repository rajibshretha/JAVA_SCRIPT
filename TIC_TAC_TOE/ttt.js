let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");  // Changed from #reset-btn
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;

const winPatters=[
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8],
]

boxes.forEach((box) => {
     box.addEventListener("click", () => {
          console.log("box was clicked");
          if(turnO && !box.disabled){  // Only allow human move if it's O's turn and box is empty
               box.innerText="O";
               turnO=false;
               box.disabled = true;
               checkWinner();
               if (!isGameOver()) {  // If game not over, computer makes move
                    setTimeout(() => {  // Small delay for better UX
                         computerMove();
                    }, 500);
               }
          }
     });
});

const showWinner=(winner)=>{
     msg.innerText=`Congratulations, Winner is ${winner}`;
     msgContainer.classList.remove("hide");
}

const checkWinner = () => {
     for (let pattern of winPatters){
          let pos1Val=boxes[pattern[0]].innerText;  // Fixed
          let pos2Val=boxes[pattern[1]].innerText;  // Fixed
          let pos3Val=boxes[pattern[2]].innerText;  // Fixed
          
          if (pos1Val !="" && pos2Val !="" && pos3Val !=""){
               if (pos1Val===pos2Val && pos2Val===pos3Val){
                    console.log("winner",pos1Val)
                    showWinner(pos1Val);  // Pass the winner
                    return true;  // Game over
               }
          }
     }
     return false;  // No winner yet
};

const isGameOver = () => {
     // Check for winner
     if (checkWinner()) return true;
     // Check for draw
     for (let box of boxes) {
          if (box.innerText === "") return false;
     }
     // Draw
     msg.innerText = "It's a draw!";
     msgContainer.classList.remove("hide");
     return true;
};

const computerMove = () => {
     // Try center first
     if (boxes[4].innerText === "") {
          boxes[4].innerText = "X";
          boxes[4].disabled = true;
          turnO = true;
          checkWinner();
          return;
     }
     // If center taken, pick random empty box
     let emptyBoxes = [];
     boxes.forEach((box, index) => {
          if (box.innerText === "") {
               emptyBoxes.push(index);
          }
     });
     if (emptyBoxes.length > 0) {
          let randomIndex = Math.floor(Math.random() * emptyBoxes.length);
          let boxIndex = emptyBoxes[randomIndex];
          boxes[boxIndex].innerText = "X";
          boxes[boxIndex].disabled = true;
          turnO = true;
          checkWinner();
     }
};

// Add reset functionality
resetBtn.addEventListener("click", () => {
     turnO = true;
     boxes.forEach((box) => {
          box.innerText = "";
          box.disabled = false;
     });
     msgContainer.classList.add("hide");
});

newGameBtn.addEventListener("click", () => {
     turnO = true;
     boxes.forEach((box) => {
          box.innerText = "";
          box.disabled = false;
     });
     msgContainer.classList.add("hide");
});