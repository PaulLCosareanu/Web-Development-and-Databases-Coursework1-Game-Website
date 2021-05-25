<?php
//function that outputs the register form, javascript needs to be added to store data on local storage and to recall it
function OutputRegisterForm(){
echo <<<Paul

<script src="./Javascript/registration.js" type="text/javascript"></script>
<form>
  <div class="imgcontainerLogin">
    <img src="\Coursework1PaulLucianCosareanu\Images\Logo.png" alt="Avatar" class="avatar">
  </div>

  <div class="containerLogin">
    <b>Username</b>
    <input type="text" placeholder="Enter Username" id="Usernameinput" required>

    <b>Password</b>
    <input type="password" placeholder="Enter Password" id="Passwordinput" autocomplete="off" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>

    <b>Country</b>
    <input type="text" placeholder="Enter Country" id="Countryinput" required>

    <button type="button" class="login" onclick="storeUser()">Register</button>
    <p id="usernameexistent" style="color:red";></p>
  </div>

  <div class="containerLogin" style="background-color:#f1f1f1">
    
  </div>
</form>


Paul;
}
