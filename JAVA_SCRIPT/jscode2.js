// Day 13 event

console.log("hello world");
let btn1 = document.querySelector("#btn1");

if (btn1) {
    let clickCount = 0;  // Declare outside to persist
    btn1.onclick = () => {
        console.log("btn 1 was clicked");
        clickCount++;
        console.log("Click count:", clickCount);
    };
} else {
    console.log("Button with id='btn1' not found!");
}