<?php


// this function outputs the list of players with the highest score, javascript needs to be added to extract data from local storage
function Outputrankingcontent(){

    echo <<<Paul
    <script src="./Javascript/ranking.js" type="text/javascript"></script>
    <div class="containerranking" >
      <div class="Rankingtitle">
         <h1 style="text-align:center;">----PLAYER RANKING----</h1>
    
      </div>
      <div class="playercontainer">
         <img src="\Coursework1PaulLucianCosareanu\Images\GoldCrown.png"></img><h3 id="firstplace" style="text-align:center;">-------------------------------------------------------------------</h3>
      </div>
      <div class="playercontainer">
         <img src="\Coursework1PaulLucianCosareanu\Images\Silver.png"></img><h3 id="secondplace" style="text-align:center;">-------------------------------------------------------------------</h3>
      </div>
      <div class="playercontainer">
         <img src="\Coursework1PaulLucianCosareanu\Images\BronzeCrown.png"></img><h3 id="thirdplace" style="text-align:center;">-------------------------------------------------------------------</h3>
      </div>
      <div class="playercontainer">
         <h3 id="therest" style="text-align:center;"></h3>
      </div>
    
    </div>







Paul;
}