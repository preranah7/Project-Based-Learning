let li = document.querySelector(".login")
li.addEventListener("click",function(){
    let id =prompt("Enter your Email ID");
    console.log(id);
    let passkey = prompt("Enter your Password");
    console.log(passkey);
    alert("Login process has started");
});

let placement = document.querySelector(".placements")
placement.addEventListener("click",function(){
    alert("Please check Placement Page")
});

let copyright = document.querySelector(".Disclaimer");
copyright.addEventListener("click",function(){
    alert("Material on this site subject to copyright unless otherwise indicated. The material may be downloaded without requiring prior permission.")
});


