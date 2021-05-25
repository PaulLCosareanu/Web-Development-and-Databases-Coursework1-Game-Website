<?php
function OutputLoginForm(){
echo <<<Paul

<script src="./Javascript/login.js" type="text/javascript"></script>
<!-- begin login form-->
<form>
<!-- the logo image situated on the login page above the user imputs-->
  <div class="imgcontainerLogin">
    <img src="\Coursework1PaulLucianCosareanu\Images\Logo.png" alt="Avatar" class="avatar">
  </div>
<!-- username and passwords inputs begin-->
  <div class="containerLogin">
    <b>Username </b>
    <input type="text" placeholder="Enter Username" id="Usernameinput" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" id="Passwordinput" required>
<!-- username and pass inputs end -->

<!-- submit button -->
<button type="button" class="login" onclick="login()">Login</button><p id="loginFailure" style="color:red;"></p>
  </div>

  <!-- cancel button -->
  <div class="containerLogin" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
  </div>
</form>

<!-- end login form-->
Paul;
}