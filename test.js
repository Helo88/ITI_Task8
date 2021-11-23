let url = "https://reqres.in/api/users/1";

let url2 = "https://reqres.in/api/users";

let fn = document.getElementById("fn");
let ln = document.getElementById("ln");
let avatar = document.getElementById("avatar");

let fnfromUser = document.getElementById("fnUser");
let lnfromUser = document.getElementById("lnUser");
let avatarfromUser = document.getElementById("avatarUser");
let userID = document.getElementById("userId");
let dropMe = document.getElementById("names");

let selectFnUser = document.getElementById("selectFnUser");
let selectLnUser = document.getElementById("selectLnUser");
let selectAvatarUser = document.getElementById("selectAvatarUser");

let xhr = new XMLHttpRequest();
let xhr1 = new XMLHttpRequest();
let xhr2 = new XMLHttpRequest();

xhr.open("get", url, true);

xhr2.open("get", url2, true);

// xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
xhr.onreadystatechange = function (res) {
  console.log("readyChange state is   " + xhr.readyState);
  if (xhr.readyState == 4) {
    console.log(xhr.status);
  }
  if (xhr.status == 200) {
    console.log(typeof xhr.response);
    console.log("\n\n");
    console.log(typeof xhr.responseText);
    console.log("\n\n");
    console.log(typeof xhr.responseXML);
    console.log("\n\n");
    obj = JSON.parse(xhr.response);
    fn.innerText = "First Name : " + obj.data.first_name;
    ln.innerText = "Last Name : " + obj.data.last_name;
    avatar.src = obj.data.avatar;
    avatar.style.width = "100px";
    avatar.style.height = "100px";
    avatar.style.borderRadius = "100%";
    console.log(obj);
  }

  if (xhr.status == 201) {
    console.log("typo  " + xhr.response);
    console.log("\n\n");
  }
};
xhr.onprogress = function () {
  console.log("status" + xhr.status);
  console.log("progressing is going on ");
};

xhr.onerror = function (err) {
  console.log("error fired");
};

xhr.send(null);

userID.addEventListener("keyup", () => {
  let url1 = `https://reqres.in/api/users/${userID.value}`;
  console.log("my url " + url1);
  xhr1.open("get", url1, true);
  xhr1.onreadystatechange = function (res) {
    if (xhr1.status == 200) {
      obj = JSON.parse(xhr1.response);
      fnfromUser.innerText = "First Name : " + obj.data.first_name;
      lnfromUser.innerText = "Last Name : " + obj.data.last_name;
      avatarUser.src = obj.data.avatar;
      avatarUser.style.width = "100px";
      avatarUser.style.height = "100px";
      avatarUser.style.borderRadius = "100%";
      console.log(obj);
    }
  };
  xhr1.send(null);
});

xhr2.open("get", url2, true);
let resArr;
xhr2.onreadystatechange = function (res) {
  if (xhr2.status == 200) {
    obj = JSON.parse(xhr2.response);
    console.log(obj.data);
    for (const person of obj.data) {
      console.log(person);
      let op = document.createElement("option");
      op.value = person.first_name;
      op.innerText = person.first_name;
      dropMe.appendChild(op);
      resArr = obj.data;
    }
  }
};
xhr2.send(null);
function findUser(name) {
  return resArr.findIndex((ele) => ele.first_name == name);
}
dropMe.addEventListener("change", () => {
  console.log("my sjsjss  " + dropMe.value);
  let user = findUser(dropMe.value);
  console.log(
    "my sjsjss  " + findUser(dropMe.value) + "--" + resArr[0].last_name
  );
  selectFnUser.innerText = "First Name : " + resArr[user].first_name;
  selectLnUser.innerText = "Last Name : " + resArr[user].last_name;
  selectAvatarUser.src = resArr[user].avatar;
  selectAvatarUser.style.width = "100px";
  selectAvatarUser.style.height = "100px";
  selectAvatarUser.style.borderRadius = "100%";
});
