<?php
// include makes a link between all the php files listed
include('\PHP\common.php');
include('\PHP\contactcontent.php');
//functions belonging to the php files above are called to start constructing the html page
OutputHead('ContactPage');
Outputmenu('Contact');
OutputcontactContent();
OutputFooter();