// function add(){
//      var a = document.getElementById("inp1").value;
//      var b = document.getElementById("inp1").value;
//      var c = parseInt(a) + parseInt(b);
//      document.getElementById("result").innerHTML= c ;}

function cngtxt(){
     document.getElementById("title").innerHTML="Javascript Master";
}
function cngtxtcol(){
     res=document.getElementById("para");
     changeColor('red');

}
function changeColor(color) {
    document.querySelector(".para").style.color = "red";
}
function inc(){
     let val = document.getElementById("val");
     let current = Number(val.innerText);
     val.innerText = current + 1;
}

function dec(){
     let val = document.getElementById("val");
     let current = Number(val.innerText);
     if(current > 0){
         val.innerText = current - 1;
     }
}
function change(){
     document.body.classList.toggle("dark");
}
