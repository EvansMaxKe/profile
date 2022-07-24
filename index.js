function validate(){
    //to validate empty inputs
    if(document.getElementById("name").value==""){
        alert("Please Enter Your Name!");
        document.getElementById("name").focus();
        return false;
    }
    if(document.getElementById("tel").value==""){
        alert("Please Enter Your Phone Number!");
        document.getElementById("tel").focus();
        return false;
    }
    if(document.getElementById("email").value==""){
        alert("Please Enter Your Email!");
        document.getElementById("email").focus();
        return false;
    }
    if(document.getElementById("message").value==""){
        alert("Please Enter Your Text Message!");
        document.getElementById("message").focus();
        return false;
    }
    else{
        //for email format validation
        var emailId=document.getElementById("email").value;
        atpos=emailId.indexOf("@");
        dotpos=emailId.lastIndexOf(".");
        if(atpos<1 || (dotpos-atpos<2)){
            alert("please enter email with format e.g username@gmail.com");
            document.getElementById("email").focus();
            return false;
        }
        return(true);
    }
}