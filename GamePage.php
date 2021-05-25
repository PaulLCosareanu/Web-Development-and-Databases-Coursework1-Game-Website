<?php
// include makes a link between all the php files listed
include('\PHP\common.php');
include('\PHP\GameCanvas.php');
include('\PHP\Slide.php');
include('\PHP\Controls.php');
//functions belonging to the php files above are called to start constructing the html page
OutputHead('GamePage');
Outputmenu('Game');
OutputSlide();
OutputGameCanvas();
outputControls();
Outputgametext();
OutputFooter();