
var eemail = document.querySelector("#lemail");
var ppassword = document.querySelector("#lpassword");
var lbtn = document.querySelector("#lbtn");

lbtn.addEventListener("click", (e) => {
  e.defaultPrevented;
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
  //alert("hiii");
  console.log(eemail.value,ppassword.value)
  var raw = JSON.stringify({
    email: (eemail.value).toLowerCase(),
    password: ppassword.value,
  });

  console.log(raw);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  //console.log(typeof email.value, password.value);
  fetch("/users/login", requestOptions)
    .then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        window.location.href="../html/error.html"
        console.log("error");
      } else {
        response.text().then((result) => {
          
          var token = JSON.parse(result).token;
           sessionStorage.setItem("token", token);
          
           var name =JSON.parse(result).user.name;
           sessionStorage.setItem("name", name);
         
          console.log(JSON.parse(result).token,JSON.parse(result).user.name, "logged in");
          window.location.href="../html/search.html"
    })
  }
})
    .catch((error) => console.log("error", error));

});

