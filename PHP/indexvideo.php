<?php
function outputvideo(){

    echo'
   
<!-- index container has within itself a youtube video, the text under the video and the text on the side of the video-->
<div class="indexcontentcontainer">

<!--content container is the first half of the screen, contains the video and the text underneath it-->
<div class="contentcontainer">
   <!--video-->
   <div class="video">
   <!--video title-->
     <h1>Welcome to my GameWebsite</h1>
     <iframe  src="https://www.youtube.com/watch?v=r82PG8bjokI">
     </iframe>
   </div>
   <!--text plus title-->
   <h1>Video Transcript</h1>
   <h3 class="transcript">
   The main focus of this website is the game, which is a replica of Galaxian or Space invaders.
   The game works in the following manor, the enemy, enemy bullets and player with the player bullet is generated in the canvas,
    the player has 3 possible controls, w for up, s for down and k to fire the bullet. The bullet,
     if fired will reset its position whenever the bullet goes out of bounds or if the bullet hits the enemy.
     </h3>
</div>



<!-- container which displays the text on the second half of the screen, on the right side of the video-->
<div class="textcontainer">
<!--text-->
   <h3>Every time you kill an enemy, 10 points will be added on top of your score
   Now, if you break the high score, your score will be displayed as being the high score. The number of lives decrease or increase, depending on the number of enemies killed or if the ship has been hit or not. If the spaceship is hit, the number of lives decreases by 1, and at every 150 enemies killed, a sound will start playing announcing the player that he just got an extra life.<br>
   
   Everything is stored in local storage, the only difference is that the logged in username will be located in the session storage, a function is used to sort the elements within the local store for then to be displayed on the ranking page.<br>
   
   The game is a replica of Space invaders, or Galaxian, which was one of the best games we all played as kids.<br>
   I do nott intend to use the game for commercial use, as it would be a copyright infringement, and i mention that i do not own any of the graphics or sounds presented within the game.<br>
   
   Have a nice day, enjoy playing the game, and please leave a feedback at the email displayed within the contact page of the website.<br>
   Signed Paul.</h3>
</div>';
}
