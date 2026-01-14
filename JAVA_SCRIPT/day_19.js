const student={
     fullName:"Rajib Shrestha",
     GPA:3.82,
     printMarks: function(){
          console.log("GPA = ",this.GPA);
     }
}
const employee={
     calcTax1(){
          console.log("Tax rate is 13%")
     },
     calcTax2 : function(){
          console.log("Tax rate is 15%")
     },
}
const karun={
     salary:50000 ,
     calcTax1(){
          console.log("Tax rate is 24 %")
     }
};
karun.__proto__ = employee;

class BMW{
     start(){
          console.log("start")
     }
     stop(){
          console.log("stop")
     }
     setBrand(brand){
          this.Brandname=brand;
     }
     
}
let M5=new BMW();
M5.setBrand("Bmw M5");
let M4=new BMW();
