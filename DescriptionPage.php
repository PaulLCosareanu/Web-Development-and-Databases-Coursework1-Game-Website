<?php
// include makes a link between all the php files listed
include('\PHP\DetailsText.php');
include('\PHP\Controls.php');
include "./PHP/Slide.php";
include('\PHP\common.php');
//functions belonging to the php files above are called to start constructing the html page
OutputHead('DescriptionPage');
Outputmenu('Details');
OutputSlide();
outputDescriptionText();
outputControls();
OutputFooter();