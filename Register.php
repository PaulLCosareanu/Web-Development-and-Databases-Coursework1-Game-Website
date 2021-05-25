<?php
// include makes a link between all the php files listed
include "./PHP/common.php";
include"./PHP/RegisterContent.php";
//functions belonging to the php files above are called to start constructing the html page
OutputHead('Register');
Outputmenu('Register');
OutputRegisterForm();
OutputFooter();

