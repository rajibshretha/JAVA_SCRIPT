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

class ToyotaCar {
     constructor(brand,mileage){
          console.log("creating new object");
          this.brand=brand;
          this.mileage=mileage;
     }
     start(){
          console.log("started")
     }
     stop(){
          console.log("stopped");
     }
}
let fortuner=new ToyotaCar("fortuner",10);//constructor
console.log(fortuner);
let lexus=new ToyotaCar("lexus",12);//constructor
console.log(lexus);

class Person{
   constructor(name){
     this.species="homo sapiens";
     this.name=name;
   }
   eat(){
     console.log("eat");
   }
}

class Engineer extends Person {
     constructor(name){
          super(name);//to invoke parent class constructor
     }
     work(){
          super.eat();
          console.log("solver problems , build something useful");
     }
}
let engobj=new Engineer("Rajib");