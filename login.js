let data =JSON.parse(localStorage.getItem("account-data"))||[];
     
    let form1 = document.querySelector("form");

    form1.addEventListener("submit",function(event){
     event.preventDefault();
     let enterEmail = document.querySelector("#email").value;
     let passPassword = document.querySelector("#password").value;

     
     
     let flag_email = "No"

     for(let i=0;i<data.length;i++){
      if(enterEmail == data[i].email){
        flag_email = "Yes";
        Password = data[i].password;
      }
     }
     console.log(flag_email,Password);

    
     if(flag_email == "Yes" && passPassword ==Password){
      // document.querySelector("#heading").textContent = "Sign in Successful";
      alert("Sign in Successful")
      window.location = "sucess.html";

     }else if(flag_email == "Yes" && passPassword!==Password){
      // document.querySelector("#heading").textContent = "Wrong Credentials";
      alert("Wrong Credentials")
      
     }else{
      // document.querySelector("#heading").textContent = "Please Enter Your Details";
      alert("Please Enter Your Details")
     }


})