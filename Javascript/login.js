let User = ""; //empty user string to transform the input into lower case

function login() {
    //Get email address
    User = document.getElementById("Usernameinput").value; //user takes the value from the input
    User = User.toLowerCase(); //transforms it into lower case

    //User does not have an account
    if (localStorage[User] === undefined) {
        //Inform user that they do not have an account
        document.getElementById("loginFailure").innerHTML = "Username or Password not recognized. Do you have an account?";
        return; //Do nothing else
    }
    else {//User has an account
        let usrObj = JSON.parse(localStorage[User]);//Convert to object
        let password = document.getElementById("Passwordinput").value;
        if (password === usrObj.password) {//Successful login
            window.location = "index.php"; //redirects to index.php
            document.getElementById("loginFailure").innerHTML = "";//Clear any login failures
            sessionStorage.loggedInUsrEmail = usrObj.username;//session storage memorises the user who logged in and passed the rules

        }
        else {//else
            document.getElementById("loginFailure").innerHTML = "Password or Username not correct. Please try again.";// password or username is incorrect is displayed
        }
    }
}
