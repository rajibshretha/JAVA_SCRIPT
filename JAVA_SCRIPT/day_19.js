// const student={
//      fullName:"Rajib Shrestha",
//      GPA:3.82,
//      printMarks: function(){
//           console.log("GPA = ",this.GPA);
//      }
// }
// const employee={
//      calcTax1(){
//           console.log("Tax rate is 13%")
//      },
//      calcTax2 : function(){
//           console.log("Tax rate is 15%")
//      },
// }
// const karun={
//      salary:50000 ,
//      calcTax1(){
//           console.log("Tax rate is 24 %")
//      }
// };
// karun.__proto__ = employee;

// class BMW{
//      start(){
//           console.log("start")
//      }
//      stop(){
//           console.log("stop")
//      }
//      setBrand(brand){
//           this.Brandname=brand;
//      }
     
// }
// let M5=new BMW();
// M5.setBrand("Bmw M5");
// let M4=new BMW();

// Day_20 Classes in JS

// class ToyotaCar {
//      constructor(brand,mileage){
//           console.log("creating new object");
//           this.brand=brand;
//           this.mileage=mileage;
//      }
//      start(){
//           console.log("started")
//      }
//      stop(){
//           console.log("stopped");
//      }
// }
// let fortuner=new ToyotaCar("fortuner",10);//constructor
// console.log(fortuner);
// let lexus=new ToyotaCar("lexus",12);//constructor
// console.log(lexus);

// class Person{
//    constructor(name){
//      this.species="homo sapiens";
//      this.name=name;
//    }
//    eat(){
//      console.log("eat");
//    }
// }

// class Engineer extends Person {
//      constructor(name){
//           super(name);//to invoke parent class constructor
//      }
//      work(){
//           super.eat();
//           console.log("solver problems , build something useful");
//      }
// }
// let engobj=new Engineer("Rajib");
// hello
// // still hello9

// day 21

// let data="secret information";

// class User{
//      constructor(name,email){
//           this.name=name;
//           this.email=email;

//      }
//      viewdata(){
//           console.log("website data",data);
//      }
// }

// class Admin extends User{
//      constructor(name,email){
//           super(name,email);
//      }
//      editData(){
//           data="some new value"
//      }
// }

// let student1=new User("rajib","rajib@gmail.com");
// let student2=new User("rajibb","rajibb@gmail.com");
// let student3=new User("rajibbb","rajibbb@gmail.com");
// let student4=new User("rajibbbb","rajibbbb@gmail.com");

// let teacher1=new User("dean","dean@gmail.com")

// let admin1=new Admin("admin","admin@college.com");


// Day 22

// function hello(){
//      console.log("hello world");
// }
// console.log("one")
// console.log("two")

// setTimeout(hello,3000);
// console.log("three")

// function sum(a,b){
//      console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//      sumCallback(a,b);
// }
// calculator(1,2,(a,b)=>{
//      console.log(a+b)
// })
// sum(1,2);

// let age=19;
// if(age>=18){
//      if(age>=60){
//           console.log("senior");
//      }
//      else{
//           console.log("middle");
//      }
// }
// else{
//      console.log("child")
// }

// function getData(dataId,getNextData){
//      setTimeout(()=>{
//           console.log("data",dataId);
//           if(getNextData){
//                getNextData();
//           }
//      },2000);
// }
// getData(1,()=>{
//      getData(2,()=>{
//           getData(3);
//      });
// });

// Day 23 

// let promise = new Promise((resolve,reject)=>{
//      console.log("Iam a promise.")
//      reject("some error occurred")
// })

// function getData(dataId,getNextData){
//      return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//                console.log("data",dataId);
//                resolve("success");
//           if (getNextData){
//                getNextData();
//           }
//           },2000);
//      });
// }

// const getPromise=()=>{
//      return new Promise((resolve,reject)=>{
//           console.log("Iam a promise.");
//           // resolve("Success");
//           reject("error")
//      });
// };

// let promisee = getPromise();
// promise.then(()=>{
//      console.log("Promise fulfilled")
// })
// promise.catch(()=>{
//      console.log("rejected")
// })


// Day 24

// function asyncFunc1(){
//      return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//                console.log("some data 1");
//                resolve("success");
//           },4000);
//      });
// }
// function asyncFunc2(){
//      return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//                console.log("some data 2");
//                resolve("success");
//           },4000);
//      });
// }
// console.log("fetching data 1")
// let p1=asyncFunc1();
// p1.then((result)=>{
//      console.log(result)
// })
// console.log("fetching data 2") //wrong
// let p2=asyncFunc2();
// p1.then((result)=>{
//      console.log(result)
// })

// console.log("fetching data 1")
// let p1=asyncFunc1();
// p1.then((result)=>{
//      console.log(result)
//      console.log("fetching data 2");
//      let p2=asyncFunc2();
//      p2.then((result)=>{
//           console.log("result")
//      })
// })

// // or 
// // promise chain
// console.log("fetching data 1 ...");
// asyncFunc1().then((result)=>{
//      console.log("fetching data 2 ...");
//      asyncFunc2().then((res)=>{});
// })

// function api(){
//      return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//                console.log("weather data");
//                resolve(200);
//           },2000);
//      })
// }
// async function getWeatherData(){
//      await api()
//      await api()
// }
// getWeatherData()


// Day 25

// const URL = "https://meowfacts.herokuapp.com";
// const factPara=document.querySelector("#fact");
// const btn=document.querySelector("#btn");


// const getFacts = async () => {
//     console.log("getting data.....")
//     let response = await fetch(URL);
//     console.log(response);//JSON format
//     let data = await response.json();
//     factPara.innerText=data[0].text;
// };
// btn.addEventListener("click",getFacts);

// #Day_30

console.log("hello world  hello")


// cd "c:\CODING\WEB DEVELOPMENT\SELF LEARN HTML-CSS-JAVASCRIPT\JAVA SCRIPT\java_script\JAVA_SCRIPT"