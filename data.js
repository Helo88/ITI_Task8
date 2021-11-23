
console.log("bgjhgb")
 let userName;
 let passWord;
 let myMail;
document.getElementById("myForm").addEventListener('submit',function(event){
    event.preventDefault()
    console.log(this.action)
   userName=document.getElementById("userName").value;
   passWord=document.getElementById("passWord").value;
   myMail=document.getElementById("myEmail").value;
   saveMe=document.getElementById("saveMe").checked;

   console.log(validateLetters(userName)+"  ----  "+validateMail(myMail))
   if(!validateLetters(userName)){
     document.getElementById("validateUserName").innerText="user name must start with a word consists of 3 chars at least ,no numbers , spaces only allowed between word" 
   }

   if(!validateMail(myMail)){
     
    document.getElementById("validateUserEmail").innerText=" mail must start with char no spaces no special chars except for .-_  yet no appearing consecutively two or more times "
   }


  if(validateLetters(userName) && validateMail(myMail)){
    this.submit()

  }

  if (validateLetters(userName) && validateMail(myMail)) {
 if(saveMe) {
    localStorage.setItem("passWord",passWord)
    localStorage.setItem("userName",userName)
 }
    sessionStorage.setItem("passWord",passWord);
   sessionStorage.setItem("userName",userName)
   sessionStorage.setItem("mail",myMail)
    this.submit();
  }
  //p
});

function validateLetters(str) {
  let letters = /^[a-zA-Z]{3,}(\s*[a-zA-Z]{3,})*$/gm;
  // console.log("res "+ letters.test(str))
  return letters.test(str);
}

function validateMail(str) {
  let mails =
    /^[a-zA-Z]+(([0-9]*)|([_.-]{0,1}[a-zA-Z0-9]))*@[a-zA-Z]+.(com|edu|net|edu).eg$/gm;
  // console.log("mailres "+ mails.test(str))
  return mails.test(str);
}







