var validate=(callback) =>{
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
        $("#duser").text(" ");
        $("#dpass").text(" ");
        var count=0;
        
    
            if(user.trim()==="admin" && pass.trim()==="12345")
            {
                localStorage.setItem("name","admin");
                callback();
            }
            else if(user.trim()!=="" && pass.trim()!=="")
            {
                $("#dpass").text("Wrong User name or Password ");
                $("#dpass").css("color","red");
                
            }
            if(user.trim()==="")
        {
            $("#duser").text("User name can not be blank");
            $("#duser").css("color","red");
        }
        if(pass.trim()==="")
        {
            $("#dpass").text("Password can not be blank");
            $("#dpass").css("color","red");
        }
    
    }
    
    function redirect()
    {
        location.href ="home.html";
    }