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

function greeet(){
     console.log("Hello, welcome to JavaScript programming");
     console.log("Have a great day!");
}
greeet();
greeet();

function myMsg(msg){
     console.log(msg);
}
myMsg("This is my first function with parameter");

function sum(a,b){
    console.log("before return");
     return a+b;
     console.log("after return"); // unreachable code
}
let result=sum(5,10);
console.log("Sum is:",result);

// arrow function 

(a,b)=>{
     return a+b;
}
// or
let add=(a,b)=> a+b;
let res=add(7,3);
console.log("Addition is:",res);

let mul=(a,b)=> {
     console.log(a*b);
return a*b;};
console.log("Multiplication is:",mul(5,4));

// practice problem:
function countVowels(str){
     let count = 0;
     let vowels = 'aeiouAEIOU';
     for (let i = 0; i < str.length; i++){
          if(vowels.includes(str[i])){
               count++;
          }
     }
     return count;  // ✅ return the count
}

let string = "Hello World";
let count = countVowels(string);
console.log("Number of vowels in the string is:", count);

let vCount=(str)=>{
     count=0;
   let vowels = 'aeiouAEIOU';
   for (i=0;i<=str.length;i++){
     if(vowels.includes(str[i])){
          count++;
     }
   }
   return count;
}
let stringh='Rajib Shrestha'
let countt=vCount(stringh)
console.log(count)
