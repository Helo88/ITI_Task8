let student1 = JSON.parse('{"id":0, "name":"jack","age":30, "address":"cairo","skills":["RU", "W", "S"],"IsLeader":true}');
let student2 = JSON.parse('{"id":2,"name":"jackline", "age":20, "address":null,"skills":["R", "Wk", "S"],"IsLeader":false}');
let student3= JSON.parse('{"id":2,"name":"jessy",  "age":33, "address":"alex","skills":["Rk", "W", "Sl"],"IsLeader":false}');
let arr;
arr=[ student1, student2, student3]
let list=document.getElementById("students")

for(let student of arr)
{
let li =document.createElement("li")
let span1 =document.createElement("span")
let span2 =document.createElement("span")
let span3 =document.createElement("span")
li.innerText= `name is ${student.name} + skills are `
span1.innerText=student.skills[0] +" , "
span2.innerText=student.skills[1] +" , "
span3.innerText=student.skills[2] +" , "
li.style.color="black"
li.appendChild(span1)
li.appendChild(span2)
li.appendChild(span3)
list.appendChild(li)

}

