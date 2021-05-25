
if (sessionStorage.getItem("loggedInUsrEmail") != undefined) {// this code is used to  check if the user is logged in or not, and displays the menu according to the userloggedin status, so if in the session storage there is a user
    
    document.getElementById("dropdown1").style.display = "none"; //the login/register button will not be displayed anymore
    document.getElementById("dropdown2").style.display = "inline"; //the logout user dropdown button  will be displayed
    

    document.getElementById("username").innerHTML = sessionStorage.getItem("loggedInUsrEmail");//displays the name of the logged in user within the button, so every time you log in you can see your name on the top right corner of the website


} else { //else
    document.getElementById("dropdown1").style.display = "inline";//log in register button is displayed, that means that nobody is logged in
    document.getElementById("dropdown2").style.display = "none";// the log out is not displayed, because there is no user to log out

}
function logoutuser() {
    sessionStorage.clear(); //whenever a user logs out, the session storage will clear, meaning that there is no user in the localstorage to actually decide if somebody is logged in or not

}