<?php

function outputDescriptionText()
{
  echo'<!--Container containing the main text and title of the description page-->';
  echo'<div class="displaytext">';
  echo'<!--Title -->';
  echo'  <h1>Description Of The Game</h1>';
  echo'<!-- text-->';
    echo'<h3>The replica created for the Web applications module has the ship situated on the left side of the canvas.<br> The controls for the ship are: w for up, s for down and k for fire. <br>If the ship is touched by one of the enemies bullets or by the enemy itself, it will EXPLODE!, and the player in turn will loose a life.</h3>';
    echo'<h3>Every 150 enemies destroyed, the player will gain a life, but every time you completely destroy the wave of enemies, it will come back stronger, meaning they will fire more bullets and the bullets will be faster and faster, getting up to a point in which is almost impossible to dodge.</h3>';
    echo'  <h3>The enemy movement is really similar to the one in Galaxian, the only difference is that the enemies go up and down, and whenever they pass the center of the canvas on the y axis, it moves toward the player. The bullets are generated randomly, there is no pattern clear enough to follow in order to advance in the game easilly.</h3>';
    echo'</div>';
    
    
}
