<?PHP 

function OutputControls(){

  echo'  

  <!-- container for the controls table having all the component inside like title, text , image -->
    <div class="container">
             <!-- Title-->
             <div class="Titlecontainer">
                 <h1>Controls</h1>
             </div>
             <!-- container with image and text-->
             <div class="verticalcontainer">
                 <div class="imagecontainer">
                     <img src="\Coursework1PaulLucianCosareanu\Images\z.jpg"></img>
                 </div>
                 <div class="textcontainerControls">
                      <h3>Keyboard Button k. When Keyboard Button k is Pressed, it Fires a Missile towards the enemy. </h3>
                 </div>
             </div>

             <!-- container with image and text-->
             <div class="verticalcontainer">
                 <div class="imagecontainer">
                     <img src="\Coursework1PaulLucianCosareanu\Images\left.png"></img>
                 </div>
                 <div class="textcontainerControls">
                     <h3>W Keyboard Button. When W is Pressed, the ship goes towards the top part of the screen.</h3>
                 </div>
             </div>

             <!-- container with image and text-->
             <div class="verticalcontainer">
                 <div class="imagecontainer">
                     <img src="\Coursework1PaulLucianCosareanu\Images\right.png"></img>
                 </div>
                 <div class="textcontainerControls">
                      <h3>S Keyboard Button. When S is Pressed, the ship goes towards the bottom part of the screen.</h3>
                 </div>
             </div> 
    </div>
';
}