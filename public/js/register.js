var namee=document.querySelector("#sname")
var email=document.querySelector("#semail")
var age=document.querySelector("#sage")
var password=document.querySelector("#spassword")
var sbtn=document.querySelector(".signbtn")
var ans=document.querySelector(".ansr")



sbtn.addEventListener("click",(e)=>{
    e.defaultPrevented;
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
    console.log({
      "name": namee.value,
      "email": email.value,
      "age": age.value,
      "password": password.value
    })
    var raw = JSON.stringify({
        "name": namee.value,
        "email": email.value,
        "age": age.value,
        "password": password.value
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/users", requestOptions)
        .then(response => response.text())
        .then(result =>{ 
           console.log(result)
           ans.textContent="Registered!"
        })
        .catch(error => console.log('error', error));
})
