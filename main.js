function validateForm(){
let nameInput=document.getElementById('name');
let emailInput=document.getElementById('email');
let input=document.getElementById('website');
let error_1=document.querySelector('.error1');
let error_2=document.querySelector('.error2');
let error_3=document.querySelector('.error3');
if(nameInput.value==""){
    nameInput.focus();
    nameInput.style.border="2px solid red";
    error_1.innerHTML="please provide your name";
    return false;
}
else{
    nameInput.value=="";
    nameInput.style.border="2px solid green";
    error_1.innerHTML="";
}

if(emailInput.value==""){
    emailInput.focus();
    emailInput.style.border="2px solid red";
    error_2.innerHTML="please provide your email";
    return false;
}
else{
    emailInput.value=="";
    emailInput.style.border="2px solid green";
    error_2.innerHTML="";
}

if(input.value==""){
    input.focus();
    input.style.border="2px solid red";
    error_3.innerHTML="please provide your name";
    return false;
}
else{
    error_3.innerHTML="";
    input.style.border="2px solid green";
    error_3.innerHTML="";
}
}
const form=document.getElementById('forms');

form.addEventListener('submit',function validation(event){
    event.preventDefault();
    validateForm();
})