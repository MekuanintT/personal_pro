let firstName = document.getElementById("fn");  
let lastName = document.getElementById("ln");
let email = document.getElementById("em");
let password = document.getElementById("pw");
let confirmPassword = document.getElementById("cpw");


let form = document.querySelectorAll(".input-container input");
console.log(form);
let button = document.getElementsByTagName("button");
console.log(button);

console.log(firstName);

 function bmw (event) {
    var  emailError = document.querySelectorAll(".em");
   if(form[0].value.length==0){
    form[0].style.backgroundColor="rgb(248, 103, 103)";
   }
   if(form[1].value.length==0){
    form[1].style.backgroundColor="rgb(248, 103, 103)";
   }
   if(form[2].value.length==0){
     emailError[0].textContent="Please enter a valid email address.";
    form[2].style.backgroundColor="rgb(248, 103, 103)";
   }
   if(form[3].value.length==0){

    form[3].style.backgroundColor="rgb(248, 103, 103)";
   }}
   for(let i=0; i<button.length; i++){
    button[i].onclick=bmw;
   }
 















   
