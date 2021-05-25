<?php
// include makes a link between all the php files listed
include('\PHP\common.php');
include "./PHP/Slide.php";
include "./PHP/RankingContent.php";
//functions belonging to the php files above are called to start constructing the html page
OutputHead('RankingPage');
Outputmenu('Ranking');
OutputSlide();
Outputrankingcontent();
OutputFooter();