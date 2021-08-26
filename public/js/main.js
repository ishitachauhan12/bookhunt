// var namee=document.querySelector(".see")
var token = sessionStorage.getItem("token");
var logout =document.querySelector("#logout")


 logout.addEventListener("click",(e)=>{
   e.defaultPrevented;
   //alert("hiii")
   //console.log(token,"hii")
   var myHeaders = new Headers();
   myHeaders.append("Authorization", `Bearer ${token}`);
   
   var raw = "";
   
   var requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };
   
   fetch("http://localhost:3000/users/logoutAll", requestOptions)
     .then(response => {response.text() ;console.log(response.status)})
     .then(result => {console.log(result)
      alert("logged out!")
      window.location.href="../html/home.html"
     })
     .catch(error => console.log('error', error));
 })
