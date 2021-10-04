var token = sessionStorage.getItem("token");
var rateme= document.querySelector(".rateme")

window.onload= function exampleFunction() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkxOWVmMjM2M2NmYmEzZmM4ZGIxNDUiLCJpYXQiOjE2MjAxNTY4MjF9.FF2p0Uqr1H2weEy3FKmxPsdD57gTgznci0b2C3ve20o`);
  console.log(token)
 
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("/tasks", requestOptions)
    .then(response => response.text())
    .then(result => {console.log(JSON.parse(result))
      var l=JSON.parse(result).length
      rateme.textContent=JSON.parse(result)[l-1].rating
      console.log(result)
    })
    .catch(error => console.log('error', error));
 
  
}

