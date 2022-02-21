
function callme()
 {
    var user = document.getElementById("name").value;
    var pass=document.getElementById("password").value;
   var email=document.getElementById("email").value;
   var phone=document.getElementById("number").value;
   var letters = /^[0-9a-zA-Z]+$/;

  if(user===" "||user.length<6)
  {
      alert("name shouldnot be less than 6 characters");
  }
  if (pass===" "||pass.length<6)
   {
    alert("password is less than 6 characters");
  }
  if(phone.length<10||phone.length>10)
  {
      alert("phonenumber should contain only 10 digits!!");
  }
  if(email===" ")
  {
      alert("invalid email");
  }
  else
  {
      alert("successful");
  }
}
