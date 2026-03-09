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

fullname="Rajib Shrestha";
console.log(fullname);
console.log("rajib");

let age=132;
age=1562;
age=1652;
console.log(age);

const students={
     name: "rajib",
     class:11
}
console.log(students.class);
students["class"]=12;
console.log(students.class);

const product={
     title:"Ball pen ",
     rating:3,
     offer:4,
     price:234,
     discount:true
};
console.log(product);

const phone={
     name: "Samsung",
     model:"s23",
     price:234444,     
}
console.log(phone );
phone.color="red";
console.log(phone);
phone.price=110000;

const student = {
  name: "Rajib",
  age: 17,
  marks: 85
}
student.grade="A";
student.marks=student.marks+5;
console.log("",student.name ,"scored ",student.marks , "and got grade ", student.grade)

const products = {
  name: "Ball Pen",
  price: 100,
  discount: 10,
  quantity: 3
};
let final_p= products.price - (products.price*products.discount/100);
let total=final_p*products.quantity;
console.log("Product:", products.name);
console.log("Price after discount:", final_p);
console.log("Quantity:", products.quantity);
console.log("Total Bill:", total);