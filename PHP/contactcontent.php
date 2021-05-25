<?php



function OutputcontactContent(){

    echo <<<Code

    <!-- Banner image of the contact webpage -->
    <div class="backgroundimagecontact">
      <img src="\Coursework1PaulLucianCosareanu\Images\contactBanner.jpg"></img>
    </div>

    <!-- container in which the phone container and email container are situated -->
    <div class="contactcontainer">
      <!--phone container in which details like text, image and title are stored -->
      <div class="phonecontainer">
        <div class="phonetitlecontact">
          <h1> Please don't hesitate to phone us!</h1>
        </div>
        <div class="phoneimage">
         <img src="\Coursework1PaulLucianCosareanu\Images\phone.png"></img>
        </div>
        <div class="phonenumber">
         <h2>Interested?<br> Just pick up the phone to chat with a member of our team.</h2><br>
         <h1>+443213214321</h1>
        </div>
    </div>

      <!-- email container in which emai title, text and images are stored -->
      <div class="emailcontainer">
        <div class="emailtitlecontact">
          <h1>Or send us an Email! </h1>
        </div>
        <div class="emailimage">
          <img src="\Coursework1PaulLucianCosareanu\Images\Logoemail.png"></img>
        </div>
        <div class="email">
          <h2>You can contact us<br> By sending an email at</h2></br><h1>example.email.com</h1>
        </div>
      </div>
    </div>
    
   <!-- container having 2 elements within it, the google maps and a text on the right side of it -->
    <div class="mapscontainer">
                 <!-google maps map-->
                 <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=middlesex&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/elementor-pro-discount-code-review/">elementor</a></div><style>.mapouter{position:relative;text-align:right;height:600px;width:600px;float:left;}.gmap_canvas {overflow:hidden;background:none!important;height:600px;width:600px;}</style></div>
                 
                  <!-- maps text -->
                 <div class="textmaps">
                 <h1>Our address:</h1><br>
                <h2>  Middlesex University<br>
                  The Burroughs<br>
                   Hendon<br>
                   London NW4 4BT</h2><br><br>
                   <h2>We are here 24/7 and</h2><br>
                   <h2>7 days out of 7</h2>
                 </div>
    </div>

Code;

}




