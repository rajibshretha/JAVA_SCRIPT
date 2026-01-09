// Day 13 event

// console.log("hello world");
// let btn1 = document.querySelector("#btn1");

// if (btn1) {
//     let clickCount = 0;  // Declare outside to persist
//     btn1.onclick = () => {
//         console.log("btn 1 was clicked");
//         clickCount++;
//         console.log("Click count:", clickCount);
//     };
// } else {
//     console.log("Button with id='btn1' not found!");
// }

// Day 14 Deep dive into Event

let btn1=document.querySelector("#btn1");

btn1.addEventListener("click",(evt) =>{
    console.log("button 1 was clicked ")
    console.log(evt);
    console.log(evt.type);
})
btn1.addEventListener("click",() =>{
    console.log("button 1 was clicked handler 2")
})

btn1.addEventListener("click",() =>{
    console.log("button 1 was clicked handler 4")
})

// btn1.removeEventListener("click",()=>{
    //     console.log("button was removed 3")  "wrong"
    // })
    
const handler3=() =>{
    console.log("button 1 was clicked handler 3")
}
btn1.addEventListener("click",handler3);
btn1.removeEventListener("click",handler3);

// practice question

