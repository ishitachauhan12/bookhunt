var token = sessionStorage.getItem("token");
var rateme= document.querySelector(".rateme")
var rv= document.querySelector(".rv")
var d=sessionStorage.getItem("d1")

rv.addEventListener("click",(e)=>{
    
    e.defaultPrevented
    var t = Number(document.querySelector('input[name="star"]:checked').value);
    d=(Number(d)+t)/2;
    //alert(d);
    rateme.textContent=d
    
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkxOWVmMjM2M2NmYmEzZmM4ZGIxNDUiLCJpYXQiOjE2MjAxNTY4MjF9.FF2p0Uqr1H2weEy3FKmxPsdD57gTgznci0b2C3ve20o`);
        myHeaders.append("Content-Type", "application/json");
      
        var raw = JSON.stringify({
          "bookid": "b-1",
          "rating": d
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("/tasks", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error))
        })
        
        
