var logot=document.querySelector("#logot")
var token = sessionStorage.getItem("token");

logot.addEventListener("click",(e)=>{
    e.defaultPrevented;
   
    
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
      <div class="ft-left">
        <p>
          <a target="_blank" href="#"
            >Ishita Chauhan</a
          >
        </p>
      </div>
  })
 