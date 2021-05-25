<?php
// the output head function outputs html onto the page, the $title element is parsed from any "mainpages".php and then it is displayed in the title
function OutputHead($title) { 

     echo <<<comma


<!DOCTYPE html>
    <html>
        <head>
        
            <!-- Linking the css files with the actual php files so that everything displayed have the proper properties -->

            <link rel="stylesheet" type="text/css" href="CSS\Style.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" type="text/css" href="\Coursework1PaulLucianCosareanu\CSS\IndexVideo.css">
            <link rel="stylesheet" type="text/css" href="\Coursework1PaulLucianCosareanu\CSS\Menu.css">
            <link rel="stylesheet" type="text/css" href="\Coursework1PaulLucianCosareanu\CSS\Logo.css">
            <link rel="stylesheet" type="text/css" href="\Coursework1PaulLucianCosareanu\CSS\SocialMediaIcons.css">
            <link rel="stylesheet" type="text/css" href="\Coursework1PaulLucianCosareanu\CSS\ListOfContact.css">
            <link rel="stylesheet" type="text/css" href="\Coursework1PaulLucianCosareanu\CSS\StyleSlide.css">
            <link rel="stylesheet" type="text/css" href="\Coursework1PaulLucianCosareanu\CSS\Controls.css">
            <link rel="stylesheet" type="text/css" href="\Coursework1PaulLucianCosareanu\CSS\LoginRegister.css">
            <link rel="stylesheet" type="text/css" href="\Coursework1PaulLucianCosareanu\CSS\ContactPage.css">
            <link rel="stylesheet" type="text/css" href="\Coursework1PaulLucianCosareanu\CSS\RankingContent.css">
            <link rel="stylesheet" type="text/css" href="\Coursework1PaulLucianCosareanu\CSS\GameCanvas.css">
            <link rel="stylesheet" type="text/css" href="\Coursework1PaulLucianCosareanu\CSS\cssDescriptionPagetext.css">

            <!-- End of the css linking -->
                   
            <!--  the <title> elemet displays the $ title parsed from any mainpage.php -->

            <title> . $title . </title> 

            <!-- the meta name forces the browser to function at the actual screen width-->
            
            <meta name="viewport" content="width=device-width, initial-scale=1"> 
        
        </head>
        <body onload="displayranking()">
        
comma;
}

// ****************************************************************************************************************************************

// the function outputmenu $page is used to generate a menu for the page, the $page element is parsed from anymainpage.php
function Outputmenu($page) {
    
     
// the dummy container menu is used to have a fake menu behind the original one to keep every div floating in any direction in line and without overlapping
    echo'   <div class="dummycontainermenu">';
    echo'       <div class="logo">
                    <a href="index.php"><img src="\Coursework1PaulLucianCosareanu\Images\Logo.png" alt="Italian Trulli"></a>
    
                </div>
            </div>';     

// container menu is the container in which the actual menu and the logo is placed
    echo'   <div class="containermenu">';
// logo is the container of the logo and the a href within the container is the actual logo populating the container
    echo'       <div class="logo">

                    <a href="index.php"><img src="\Coursework1PaulLucianCosareanu\Images\Logo.png" alt="Italian Trulli"></a>
                
                </div>';

// the class menu is a container in which the buttons/ links towards all the other pages are displayed
    echo'       <div class="menu">';

                 $pathimagex="/Coursework1PaulLucianCosareanu/Images/";                                                           //the path of the images, problems with writing, php took certain symbols combined as commands
                 $linkNames = array("Home", "Details", "Ranking", "Game", "Contact", "User");                                     //array of Link names, the names which are displayed in the menu
                 $linkAddresses = array("index.php", "DescriptionPage.php", "RankingPage.php", "GamePage.php", "ContactPage.php");//array of the main pages
                 $iconNames = array("Home", "Details", "Ranking", "Game", "Contact");                                             // second part of the path of the images, these images are the icons within the menu

                //Output navigation
                 for ($x = 0; $x < count($linkNames); $x++) {
                                                                                                       //algorith for output navigation short description
                    if($linkNames[$x]!="User"){                                                        //for every x going from 0 to the number of  link names, important x< link names total
                    echo '<a ';                                                                        //if the linknames are different than "user",starts printing the menu up to the user but not including the User. then if the link name is the same with the $page which is parsed
                     if ($linkNames[$x] == $page) {                                                    //from anymainpage.php then it takes the class selected,meaning that if you press the home button for example
                        echo 'class="selected" ';                                                      //the color of the text will become black because you are situated on that page, it clears out after you visit another page,
                     }                                                                                 //after everything is printed and the array[x] takes the user value, the user dropdown code is printed
                    
                     
                    //  output icons in specific menu buttons, the algorith checks if the name of the link is the same with the name of the icon, if yes then prints
                    for($y=0; $y<count($iconNames); $y++){ 
                            if($linkNames[$x] == $iconNames[$y]){                                                                            
                     echo 'href="'.$linkAddresses[$x].'"><img class="test" src="'.$pathimagex.$iconNames[$y].'.png"> ' . $linkNames[$x] . '</a>';
                            }
                        }
                    // end of output icons in specific menu buttons 

                    // if linkname is user then the dropdown html with it's according icon is printed
                }else if($linkNames[$x]=="User"){
               echo'<div class="dropdown" >
                        <button class="dropbtn" id="dropdown1" style="display:inline"><img class="test" src="\Coursework1PaulLucianCosareanu\Images\User.png">User</button>
                            <div class="dropdown-content">
                                <a href="Login.php">Log In</a>
                                <a href="Register.php">Register</a>
                            </div>
                    </div>';
                    echo'<div class="dropdown" >
                        <button class="dropbtn"  id="dropdown2" style="display:none;"><img class="test" src="\Coursework1PaulLucianCosareanu\Images\User.png" style="float:left";><div id="username" style="float:left";>User</div></button>
                            <div class="dropdown-content">
                                <a href="index.php" onclick="logoutuser()">Log Out</a>
                            </div>
                    </div>';

                } 
            }
            echo'</div>';
       echo'</div>
       <script src="./Javascript/Loggedinout.js" type="text/javascript"></script>';
}

// *********************************************************************************************************************************************************
// this function prints the footer part of html
function OutputFooter() {
    echo       
             '<footer>
             <!-- footer container-->
                <div class="footerstyle">
                 
                <!--footer icons container-->
                 <div class="footericons">
                     
                     <!--content within the footer icons container -->
                     <a href="#" class="fa fa-facebook"></a>
                     <br>
                     <a href="#" class="fa fa-google"></a>
    
                 </div>
                

                 <!-- container fot the logo and the copyright text within the footer -->
               <div class="containerfooterlogocopy">
                 
                 <!-- logo container with the logo image within the container-->
                 <div class="logofooter">
                 <a href="index.php"><img src="\Coursework1PaulLucianCosareanu\Images\Logo.png" alt="Italian Trulli"></a>
             </div>
                 
                 <!-text container with the actual text inside it -->
                 <div class="copyright">
                 <h3>© 2011 John Doe All Rights Reserved</h3>
                 </div>
                 </div>

                 <!-- list of contact whics is a bullet point with different details, the list of contat is the container containing the bullet points-->
                 <div class="listofcontact">
                     <ul>
                         <li><h5>Contact Number: 07448642396</h5></li>
                         <li><h5>Email: cosareanu.paul@yahoo.com</h5></li>
                         <li><h5>Address: 16 Scarborough Road Leytonstone</h5></li>
                 </div>
                 </div>
                 
             </footer>
             </body>
         </html>';
}
