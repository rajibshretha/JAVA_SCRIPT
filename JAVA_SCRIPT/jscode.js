// // Day 6 // arrays in JS

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(typeof arr); // object

// // accessing elements
// console.log(arr[0]); // 1
// console.log(arr[2]); // 3
// console.log(arr[4]); // 5
// console.log(arr[5]); // undefined
// // modifying elements
// arr[2] = 10;
// console.log(arr); // [1,2,10,4,5]
// // length of array
// console.log(arr.length); // 5
// // adding elements
// arr.push(6);
// console.log(arr); // [1,2,10,4,5,6]
// // removing elements
// arr.pop();
// console.log(arr); // [1,2,10,4,5]

// for(let idx=0; idx<arr.length; idx++){
//     console.log(`Element at index ${idx} is ${arr[idx]}`);
// }

// // practice problem:

// let marks=[85,97,44,37,76,60]
// let average=0;
// for (let i=0 ; i <marks.length;i++){
//      average+=marks[i]/marks.length;
// }
//     console.log(average);

// let price=[250,645,300,900,50];

// for(let i=0;i<price.length;i++){
//      console.log(`original price at index ${i}:${price[i]}`);
//      price[i]=price[i]*0.9; // adding 10% discount price
//      console.log(`discounted price at index ${i}:${price[i]}`);
// }

// let marvelhero=['ironman','spiderman','thor','hulk','captain america'];
// let dchero=['batman','superman','flash','aquaman','wonder woman'];

// let allhero=marvelhero.concat(dchero);
// console.log(allhero);

// let val=marvelhero.shift();
// console.log(val);
// marvelhero.unshift('black panther');
// console.log(marvelhero);
// let rev=marvelhero.reverse();
// console.log(rev);

// console.log(marvelhero.slice(2,4)); 
// marvelhero.splice(1,'spiderman','black widow');
// console.log(marvelhero); 

// // practice problem:
// let companies=['google','meta','apple','microsoft','amazon'];
// companies.pop(1);
// console.log(companies);
// companies.shift();
// companies.splice(1,2,'netflix','spotify');
// console.log(companies);
// companies.push("tesla");
// console.log(companies);
// console.log(companies.indexOf('amazon'));

// Day 8 // functions in JS

// function greeet(){
//      console.log("Hello, welcome to JavaScript programming");
//      console.log("Have a great day!");
// }
// greeet();
// greeet();

// function myMsg(msg){
//      console.log(msg);
// }
// myMsg("This is my first function with parameter");

// function sum(a,b){
//     console.log("before return");
//      return a+b;
//      console.log("after return"); // unreachable code
// }
// let result=sum(5,10);
// console.log("Sum is:",result);

// // arrow function 

// (a,b)=>{
//      return a+b;
// }
// // or
// let add=(a,b)=> a+b;
// let res=add(7,3);
// console.log("Addition is:",res);

// let mul=(a,b)=> {
//      console.log(a*b);
// return a*b;};
// console.log("Multiplication is:",mul(5,4));

// // practice problem:
// function countVowels(str){
//      let count = 0;
//      let vowels = 'aeiouAEIOU';
//      for (let i = 0; i < str.length; i++){
//           if(vowels.includes(str[i])){
//                count++;
//           }
//      }
//      return count;  // ✅ return the count
// }

// let string = "Hello World";
// let count = countVowels(string);
// console.log("Number of vowels in the string is:", count);

// let vCount=(str)=>{
//      count=0;
//    let vowels = 'aeiouAEIOU';
//    for (i=0;i<=str.length;i++){
//      if(vowels.includes(str[i])){
//           count++;
//      }
//    }
//    return count;
// }
// let stringh='Rajib Shrestha'
// let countt=vCount(stringh)
// console.log(count)

// day 9 // deep dive into js

// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){
//      console.log(val);   
// });

// let arrr=["kathmandu","pokhara","dhading","biratnagar"];
// arrr.forEach(function pCity(city){
//      console.log(city.toUpperCase());
// })
// // map function
// let squaredArr=arr.map(function squareVal(val){
//      return val*val;
// });
// console.log(squaredArr);
// // filter function
// let evenArr=arr.filter(function filterEven(val){
//      return val%2===0;
// });
// console.log(evenArr);
// // reduce function
// let sumArr=arr.reduce(function sumVal(accumulator,val){
//      return accumulator+val;
// },0);
// console.log(sumArr);

// const output=arr.reduce((prev,curr)=>{
//      return prev> curr? prev : curr;
// })
// console.log(output);

// // practice problem:
// let marks=[85,97,44,37,96,60];
// let a=marks.filter((val)=> {
//      return val>=90});
// console.log(a);

// let n= prompt("enter your number: ");
// let aer=[];
// for (let i=1;i<=n;i++){
//      aer[i-1]=i;    
// }
// console.log(aer);
// let sumaer=aer.reduce(function sumVall(accumulator,val){
//      return accumulator+val;
// })
// console.log("sum:",sumaer);
// let facaer=aer.reduce(function factArr(acc,val){
//      return acc*val;
// })
// console.log("factorial:",facaer);\

// Day 10 --DOM-document object model

console.log(window.document)
console.dir(document.body);
console.log(document.body);
console.log(document.head);
console.dir(document.body.childNodes[1]);

document.body.childNodes[1].innerText="abcd";

let heading = document.getElementById("header");//h1

console.dir(heading);

let button = document.getElementById("my id");//h1
console.dir(button);
let header = document.getElementsByClassName("heading-class");
console.dir(header);
console.log(header);
let allEl=document.querySelectorAll(".myClass");
console.dir(allEl);
