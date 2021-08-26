var namex = sessionStorage.getItem("name")
var phy1=document.querySelector("#phy1")
var phy2= document.querySelector("#phy2")
var phy3=document.querySelector("#phy3")
var phy4= document.querySelector("#phy4")
var phy5=document.querySelector("#phy5")
var hide =document.querySelector(".hide")
var hi= document.querySelector(".hi")
var one =document.querySelector(".one")
var two =document.querySelector(".two")
var three =document.querySelector(".three")
var four =document.querySelector(".four")
var five =document.querySelector(".five")
var oner =document.querySelector(".oner")
var search =document.querySelector("#search")
var see=document.querySelector("#see")
var selectBox = document.getElementById("selectBox");
window.onload= function you(){
    
    console.log(namex)
    hi.textContent=`Hi, ${namex}!`

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkxOWVmMjM2M2NmYmEzZmM4ZGIxNDUiLCJpYXQiOjE2MjAxNTY4MjF9.FF2p0Uqr1H2weEy3FKmxPsdD57gTgznci0b2C3ve20o`);
        console.log(token)
       
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("http://localhost:3000/tasks", requestOptions)
          .then(response => response.text())
          .then(result => {console.log(JSON.parse(result))
            var l=JSON.parse(result).length
            oner.textContent=JSON.parse(result)[l-1].rating
            console.log(result)
          })
          .catch(error => console.log('error', error));
        
}

//physics
//maths

search.addEventListener("click",(e)=>{
e.defaultPrevented

  var y=undefined
  var selectedValue=undefined
 selectedValue = selectBox.options[selectBox.selectedIndex].value;
  
  
y=see.value.toLowerCase()
console.log(y)


if(y=="physics" || selectedValue=="physics"){
    
  one.textContent="Concept of Physics"
  two.textContent="Problems on physics"
  three.textContent="Advanced problem"
  four.textContent="Physics for iitjee"
  five.textContent="Comprehensive Physics"
  
  phy1.style.display = 'block'
  phy2.style.display = 'block'
  phy3.style.display = 'block'
  phy4.style.display = 'block'
  phy5.style.display = 'block'
  
  one.href="single.html"
  two.href="single2.html"
  three.href="single3.html"
  four.href="single4.html"
  five.href="single5.html"
}

else if(y=="maths" || selectedValue=="maths"){
    
  one.textContent="Higher Algebra"
  two.textContent="Coordinate Geometry"
  three.textContent="Mathematics for Jee Advanced"
  four.textContent="Objective maths"
  five.textContent="Mathematics for jee"
  
  phy1.style.display = 'block'
  phy2.style.display = 'block'
  phy3.style.display = 'block'
  phy4.style.display = 'block'
  phy5.style.display = 'block'
  
  one.href="msingle.html"
  two.href="msingle2.html"
  three.href="msingle3.html"
  four.href="msingle4.html"
  five.href="msingle5.html"
  
}


else {
    one.textContent="No such topic found"
}



})

