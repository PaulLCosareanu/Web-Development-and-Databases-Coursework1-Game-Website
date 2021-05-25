<?php
// function outputting a blank canvas
function OutputGameCanvas(){
    echo '
    <audio src="./Sound/BackgroundMusic .mp3" id="bgm"></audio>
    <audio src="./Sound/24 Shoot!.mp3" id="shoot"></audio>
    <audio src="./Sound/26 Player Down!.mp3" id="destroy"></audio>
    <audio src="./Sound/02_Stage Select.mp3" id="gameover"></audio>
    <audio src="./Sound/1up.mp3" id="1up"></audio>
    <!-- canvas attribute which generates a canvas for future development-->
    <canvas id="mycanvas" width="880" height="600"> 
    </canvas>
    <script src="./Javascript/test.js" type="text/javascript"></script>
    
    
    


';
}
//function outputting the game description situated under the game canvas
function Outputgametext(){

    echo'
    <!-- container containing text and title -->
    <div class="Gametextcontainer">
      <!--title-->
      <h1>GALAXIAN Replica</h1>
      <!--text-->
      <h3>  Galaxian is a game published by NAMCO in the year 1979,
      for short, it’s a game in which the player is represented by a small spaceship,
      it is localised at the bottom of the game and it can fire projectiles towards enemies,
      the enemies in turn attack the player through their own projectiles. 
      The enemy’s movement is from the left part of the screen to the right and vice-versa.
      </h3>
      <h3>The concept of the game above is similar to the Galaxian game, the difference is that instead of the enemies being above, on top of the canvas,
      the enemies are spawned on the far right, going up and down within the limits of the canvas, and towards the player on certain conditions.</h3>
      <h3>The player is on the far left, the player can not go towards the enemy, the player being restricted to up and down movement, using the keys w and s, the player can fire
      a projectille towards the enemy by pressing the k keyboard button.</h3>
      <h3>Enemies, in turn can fire bullets, them being randomly generated, thus not having a clear pattern of the bullets, making the game harder and harder to play as the player advances
      throughout the game.</h3>
      <h3>The score and highscore is displayed on the far upper left corner of the canvas, score respresenting the score of the user playing the game, and highscore resenting
      the highest score within the local storage. Scores are updated in real time, so if a player brakes the high score, it will be displayed on the screen and on the ranking page of the website.
      The number of lifes that a player has is displayed on the top right side of the canvas, the number can increment or decrease according to the user skills.</h3>
      <h3>KEEP IN MIND that you cannot play this game if you are not logged in, or if you do not have an account on my website!<br>I hope you enjoy the game I created, try to be the first in the ranks, and do your best!</h3>
      <h3>I mention that the graphics and sound do not belong to me, the project is not used to generate revenue, thus not breaking the copyright rules.</h3>
    </div>
';
}