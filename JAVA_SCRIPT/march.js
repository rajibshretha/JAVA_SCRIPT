// function add(){
//      var a = document.getElementById("inp1").value;
//      var b = document.getElementById("inp1").value;
//      var c = parseInt(a) + parseInt(b);
//      document.getElementById("result").innerHTML= c ;}

// function cngtxt(){
//      document.getElementById("title").innerHTML="Javascript Master";
// }
// function cngtxtcol(){
//      res=document.getElementById("para");
//      changeColor('red');

// }
// function changeColor(color) {
//     document.querySelector(".para").style.color = "red";
// }
// function inc(){
//      let val = document.getElementById("val");
//      let current = Number(val.innerText);
//      val.innerText = current + 1;
// }

// function dec(){
//      let val = document.getElementById("val");
//      let current = Number(val.innerText);
//      if(current > 0){
//          val.innerText = current - 1;
//      }
// }
// function change(){
//      document.body.classList.toggle("dark");
// }

// MARCH 9

// fullname="Rajib Shrestha";
// console.log(fullname);
// console.log("rajib");

// let age=132;
// age=1562;
// age=1652;
// console.log(age);

// const students={
//      name: "rajib",
//      class:11
// }
// console.log(students.class);
// students["class"]=12;
// console.log(students.class);

// const product={
//      title:"Ball pen ",
//      rating:3,
//      offer:4,
//      price:234,
//      discount:true
// };
// console.log(product);

// const phone={
//      name: "Samsung",
//      model:"s23",
//      price:234444,     
// }
// console.log(phone );
// phone.color="red";
// console.log(phone);
// phone.price=110000;

// const student = {
//   name: "Rajib",
//   age: 17,
//   marks: 85
// }
// student.grade="A";
// student.marks=student.marks+5;
// console.log("",student.name ,"scored ",student.marks , "and got grade ", student.grade)

// const products = {
//   name: "Ball Pen",
//   price: 100,
//   discount: 10,
//   quantity: 3
// };
// let final_p= products.price - (products.price*products.discount/100);
// let total=final_p*products.quantity;
// console.log("Product:", products.name);
// console.log("Price after discount:", final_p);
// console.log("Quantity:", products.quantity);
// console.log("Total Bill:", total);

// MARCH 10

// let a =5;
// let b ="5";
// console.log(a===b);
// let aa=console.log(a>b || a==b);
// console.log(aa)

// if (a==5){
//      console.log("Hello world");
// }
// else if(a===5){
//      console.log("hello rajib");
// }
// alert("unwanted virus")
// let number = prompt("Enter a number");
// if (number%5==0){
//      console.log("The given number is divisible by 5")
// }
// else {
//      console.log("The given number is not divisible by 5");
// }

// let username = prompt("Enter username");
// let password = prompt("Enter password");
// let age = number(prompt("Enter age"));

// const ousername="rajib";
// const opassword="12345";
// if (ousername==username && opassword==password && age<=18){
//      console.log("Access granted but youre under 18");
// }
// else if (ousername==username && opassword==password && age>18){
//      console.log("Access granted \n full authority");
// }
// else{
//      console.log("ACCESS DENIED");
// }

// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let count=0;
// let guess = prompt("Guess a number between 1 and 10");

// while(guess != secretNumber){
//      count++;
//     if(guess > secretNumber){
//         console.log("Too High");
//     }

//     else{
//         console.log("Too Low");
//     }

//     guess = prompt("Try again");
// }

// console.log("Correct! You guessed the number.");
// console.log(count,"tried taken to guess the correct answer ");

// MARCH 11 "" LOOPS AND STRINGS  ""

// for(let i = 1 ;i <=5;i++){
//      console.log(i+i)
// }
// // for of loop

// let vara="rajib";

// size=0;
// for (let i of vara){
//      size+=1;
//      console.log(i);
// }
// console.log("string size : ",size);

// // for in loop

// let student ={
//      name: "rajib shrest",
//      age:23,
//      cgpa:345,
//      ispass:true,

// }
// for (let i in student){
//      console.log(i);
//      console.log(student[i]);
// }

// for(let i =0 ;i<=100;i++){
//      if(i%2==0){
//           console.log(i);
//      }
// }

// let student = {
//     name: "Rajib",
//     age: 17,
//     marks: 78,
//     isPass: true
// };
// for (let key in student){
//      console.log(key,":",student[key]);
// }
// count=0;
// for(let letter of student.name){
//      count++;
// }
// console.log("Total length of name",count);
// for (let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }
// if(student.isPass){
//      console.log(student.name,"has passed");
// }
// else{
//      console.log(student.name,"has failed");
// }

// let name="Rajib";
// let counts=0;
// let temp="";
// for (let i of name){
//      counts++;
//      temp=temp+i;
//      for (let j =1; j<=counts; j++){
//           console.log(temp);
//      }
//      // console.log(i.toUpperCase());
// }
// let namee = "RAJIB";
// let tempp = "";

// for (let i of namee){
//     tempp = tempp + i;
//     console.log(tempp);
// // }

// // MARCH 12

// let rajib="    Rajib SHRESTHA     ";
// let add="don";
// let output=(`hello my name is ${rajib} ` );
// console.log(output)
// console.log(`Hello my name is ${rajib.toLowerCase()}`)
// console.log(`Hello my name is ${rajib.trim()}`)

// // string slicing str.slice(Start , end ? )// return part of string
// // str1.concat(str2)//join str2 with str 1

// console.log(rajib.slice(2,6));
// console.log(rajib.concat(add));

// console.log(rajib.replace("H","y"))
// console.log(rajib.charAt(6));

// let name=prompt("Enter you full name :");
// username="@"+name+name.length;
// console.log(username);

// array

// let arr=[0,1,2,3,4,5,6,7,8,9,];

// arr.splice(2,0,24)
// console.log(arr)


// let companies=["openai","google","gmail","bmw","audi"]
// console.log(companies);
// companies.pop()
// console.log(companies);
// companies.splice(2,1,"microsoft")
// for(com of companies){
//      console.log(com)
// // }
// let temp=0;
// let marks=[85,97,44,37,76,60];
// for(let mark of marks){
//      temp=temp+mark;
// }
// console.log(temp/marks.length);

// let items = [250,645,300,900,50];
// for (let i=0;i<=items.length;i++){
//      let offer = items[i]/10;
//      items[i] -= offer;
// }
// console.log(items)