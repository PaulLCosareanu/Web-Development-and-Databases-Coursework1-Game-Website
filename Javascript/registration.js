let usertried = false; //boolean value initially false
function storeUser() {


  //Build object that we are going to store
  var usrObject = {}; //usrobject is an object, it takes the values of the users from the localstorage
  let usr = ""; // usr string to make everything lower case
  let ctry = ""; //ctry string to make everything lower case

  usr = document.getElementById("Usernameinput").value;// string gets populated
  ctry = document.getElementById("Countryinput").value;//string gets populated
  usrObject.username = usr.toLowerCase();// the object.username takes the string value transformed into lowercase
  usrObject.password = document.getElementById("Passwordinput").value;// the object.password gets the password inputted by the user
  usrObject.score = "0"; // score is defined from the beginning as being 0 until the player has played the game, then it updates
  usrObject.country = ctry.toLowerCase();// same as the usernam, everything is stored as being lowercase but not the password
  let res = false;//res is a boolean which takes true if the password has all the requirements below
  let str = document.getElementById("Passwordinput").value;//str takes the password from the user input
  if (str.match(/[a-z]/g) && str.match( //then that string is checked against different characters, letters etc, to see if it meets all the requirements
    /[A-Z]/g) && str.match(
      /[0-9]/g) && str.match(
        /[^a-zA-Z\d]/g) && str.length >= 8) {
    res = true; //if all the requirements are matched, res is true.
  }
  //Store user
  usertried = true;// usertried becomes true, meaning that the user pressed the submit values and values were parsed within the function

  if (localStorage[usrObject.username] === undefined && res) { //is the username that the user inputted is not in the localstorage and if the password requirements have been met
    localStorage[usrObject.username] = JSON.stringify(usrObject); //the user is saved within the local storage
    usertried = false; //user tried becomes false because the user has already been stored
    document.getElementById("usernameexistent").innerHTML = "Username " + usrObject.username + " registered succesfully!";// displays a message saying that the user has been registered
  } else if (usertried && res) {// if the user has pressed the submit password and the password conditions have been met, but if the username is existent then the following message is shown and the function ends
    document.getElementById("usernameexistent").innerHTML = "We are sorry but the username already exists"; //username exists message
  } else if (usertried && res == false) {// if the user pressed submit button but the password is incorrect, the following message will be displayed and the function ends
    document.getElementById("usernameexistent").innerHTML = "Password Requirements:<br>-At least one special character.<br>-At least one Upper case letter.</br>-At least one lower case letter.<br>-Minimum length of the password : 8 characters.<br>Please try again!";
  }//a list of password requirements are shown, and the user is asked nicely to try again


}

