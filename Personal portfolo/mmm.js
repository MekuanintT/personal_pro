let firstName = document.getElementById("fn");  
let lastName = document.getElementById("ln");
let email = document.getElementById("em");
let password = document.getElementById("pw");
let confirmPassword = document.getElementById("cpw");


let form = document.querySelectorAll(".input-container input");
console.log(form);
let button = document.getElementsByTagName("button");
console.log(button);
let  err=document.querySelectorAll(".mk p");
console.log(firstName);

 function bmw (event) {
    var  emailError = document.querySelectorAll(".em");
   if(form[0].value.length==0){
     err[0].textContent="First name is required.";
    form[0].style.backgroundColor="rgb(248, 103, 103)";
   }
   if(form[1].value.length==0){
    err[1].textContent="Last name is required.";
    form[1].style.backgroundColor="rgb(248, 103, 103)";
   }
   if(form[2].value.length==0){

      err[2].textContent="Email is required.";
    form[2].style.backgroundColor="rgb(248, 103, 103)";
   }
   if(form[3].value.length==0){

    err[3].textContent="Password is required.";
    form[3].style.backgroundColor="rgb(248, 103, 103)";
   }}
   for(let i=0; i<button.length; i++){
    button[i].onclick=bmw;
   }

