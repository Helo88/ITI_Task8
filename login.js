

let loginBtn=document.getElementById("localBtn");

loginBtn.addEventListener('click',()=>{
    console.log("here")
let userName=document.getElementById("userName");
let passWord=document.getElementById("passWord");


userName.value=localStorage.getItem("userName")
passWord.value=localStorage.getItem("passWord")


console.log(userName.value,"--",passWord.value)
})