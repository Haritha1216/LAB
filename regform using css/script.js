function callme()
{
    var pass=document.getElementById("password").value;
    var email=document.getElementById("email").value;
    if(pass.length<6)
    {
        alert("password is less than 6 characters");
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