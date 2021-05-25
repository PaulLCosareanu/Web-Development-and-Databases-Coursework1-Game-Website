let SPEEDBULLET = 1; //initial speed of the bullets
let Bullet = {}; //bullet array
let Enemy = {}; //enemyarray
let canvas = document.getElementById("mycanvas"); //allows to modify the canvas through MyCanvas id
let ctx = canvas.getContext("2d");
let x = 20; //coordinates of the player(spaceship) on the x axis
let y = canvas.height / 2 - 50; //coordinates pf the player (spaceship) on the y axis
let dx = 2;
let dy = 2; //value used to move the spaceship,
let upbutton = false; //upbutton is a boolean for when the keyup is pressed
let downbutton = false; //downbutton is a boolean for when the keydown is pressed
let spacebutton = false; //same goes for spacebutton (spacebar)
let bulletposx = x; //position of the bullet (clone of the ship position)
let bulletposy = y; //position of the bullet on the y axis as well clone of the ship y
let hasshoot; 
let sp = 0; //velocity or speed etc of the bullet, increase this to make bullet faster
let i; //used for for loop in the enemy creation
let j; //used for for loop in the enemy creation
let n = 9; //used for for loop in the enemy creation
let m = 3; //used for for loop in the enemy creation
let created = true;// checks is enemies and bullets are created or not
let enemies = []; //array of enemies objects
let enemiesbullets = []; //array on enemies bullets objects
let coordinatex = 0;//improvised for loop
let coordinatey = 0;// improvised for loop
let enemyvelocitydown = 20;// the number of pixels the enemy goes towards the player, it's called down, as i planned initially to have the enemies on top of the canvas, but the side scroller seemed better after some time
let enemyvelocityup = - 1; //enemyvelocity up is a variable which decides the speed of the enemies, if you want to make them faster, change this variable to have a lower minus value, e.g -0.5 or -1, -1.5 and so on... 
let shipimg = [3]; //array of 3 elements for the ship images
let index = 0; //index for the ships animation
let score = 0; //player playing score
let NoOfLifes = 2; //player lifes
let cx; //click coordinate x
let cy; //click coordinate y
let rr = 10000; // how often the bullets are spawned, if you want to make the game more difficult, make this smaller but don't go below 24( as you need the same number as the enemies)
let speed = 1;
let velocity = []; //velocity is used to  check if player has been hit
imageexplosion = []; //array of images paths
shipimg[0] = new Image();//defining the ship 0 as being an image
shipimg[1] = new Image();
shipimg[2] = new Image();
shipimg[0].src = '/Coursework1PaulLucianCosareanu/Images/Ship1.png'; //giving the path to the image
shipimg[1].src = '/Coursework1PaulLucianCosareanu/Images/Ship2.png';
shipimg[2].src = '/Coursework1PaulLucianCosareanu/Images/Ship3.png';
let imgenemy = new Image();//defining imgenemy as an image
imgenemy.src = '/Coursework1PaulLucianCosareanu/Images/Enemy.png'; //giving it the path to the jpg
let bgm = document.getElementById('bgm'); //gets the element which containt the background music
let oneup=document.getElementById("1up");
let shoot = document.getElementById('shoot');//shoot sound effect
let destroy = document.getElementById('destroy');//destroy sound effect
let gameover = document.getElementById("gameover"); //gameover sound effect
bgm.volume = 0.3; //bgm sound effect volume
gameover.volume = 0.1; //gameover soun effect volume
let keypress = true; //keypress boolean
let destroyed = false; //destroyed boolean
let indexexplosionanimation = 0;// index for the explosion of the ship animation
let gamestarted = false;// checks if the game is started
let retry = false;//retry is used to see if the retry menu is displayed
mainmenu = false;//mainmenu is used to see if it should display the main menu
let nue = 24; //number of enemies existent
let enemyspeed = -0.5; //
let a = true; //boolean value to do a function once, when necesary
let highscore = 0; //highscore displaying the highest score in the localstorage
let as = true; //boolean value to do a function once, when necesary
arrayofuserss = []; //array to parse users from localstorage to objects and then saved in this array
let totalenemieskilled=0;

function DrawLifes() { //draws the lifes available on the canvas
        ctx.font = "16px Arial";  //size of text
        ctx.fillStyle = "Yellow";  //color
        ctx.fillText("Lifes: " + NoOfLifes, canvas.width - 60, 20); //text position
}
function DrawScore() {  //draws the score on the canvas
        ctx.font = "16px Arial";  //size of text
        ctx.fillStyle = "Yellow";  //text color
        ctx.fillText("Score: " + score, 8, 20);  //position
}

function displayhighscore() {
        for (i = 0; i < localStorage.length; i++) {// for every element in the local storage
                if (as) { //if as
                        let usrn = JSON.parse(localStorage.getItem(localStorage.key(i)));
                        arrayofuserss.push(usrn); //array gets populated


                }
        }
        for (i = 0; i < arrayofuserss.length; i++) { //array is then sorted
                for (j = 0; j < arrayofuserss.length - 1; j++) {
                        if (arrayofuserss[j].score < arrayofuserss[j + 1].score) {
                                aux = arrayofuserss[j];
                                arrayofuserss[j] = arrayofuserss[j + 1];
                                arrayofuserss[j + 1] = aux;

                        }
                }

        }
        highscore = arrayofuserss[0].score; // highscore gets the highest score
        as = false; //as gets false
        if (score > highscore) { //if score is grater than the highscore
                ctx.font = "16px  Arial"; //size of the font 
                ctx.fillStyle = "Yellow";  //color of the font
                ctx.fillText("High Score: " + score, 8, 40); //position of the text
                highscore = score; //highscore gets the value score

        } else {
                ctx.font = "16px  Arial"; //size of the font 
                ctx.fillStyle = "Yellow";  //color of the font
                ctx.fillText("High Score: " + highscore, 8, 40); //position of the text , and highscore is displayed because the score is lower than highscore
        }
}
function MenuStart() { //menu text. draws the menu at the start screen


        ctx.font = "30px  Arial"; //size of the font 
        ctx.fillStyle = "Yellow";  //color of the font
        ctx.fillText("Start Game", canvas.width / 2 - 15, canvas.height / 2 - 15); //position of the text
        if (cx >= canvas.width / 2 - 15 && cx <= canvas.width / 2 + 50 && cy >= canvas.height / 2 - 40 && cy <= canvas.height / 2 - 15) { //condition if clicked within the text area
                gamestarted = true; //the game has started, meaning the boolean value gamestarted becomes true
        }

}



function detectmouse() { //event listener to detect the click of the mouse
        ctx.canvas.addEventListener("mousedown", onDown); //the function calls the ondown function
}
function onDown(event) { //ondown function
        cx = event.pageX - ctx.canvas.offsetLeft; //cx takes the value x on the canvas
        cy = event.pageY - ctx.canvas.offsetTop;  //cy takes the value of y axis on canvas
}

function createenemy(coordinatex, coordinatey) {  // function used to create array of enemies

        let eposx = canvas.width - ((coordinatex + 1) * 60); //values in the enemy object, pos in x axis
        let eposy = canvas.height - ((coordinatey + 1) * 50);//values in the enemy object, pos in y axis
        let enemyWL = 20;//values in the enemy object, size of enemy e.g. width and height
        let down = true;//values in the enemy object, checks if enemy is destroyed or not
        let Enemy = { //the object called Enemy
                eposx: eposx,
                eposy: eposy,
                enemyWidth: enemyWL,
                enemyHeight: enemyWL,
                down: down,
        }
        enemies.push(Enemy); //populating enemies array with Enemy objects
}




function EnemyMove() { //function which tells the enemy how to move on the screen

        enemies.forEach(function (Enemy, i) { //for each enemy object found in the array enemies

                Enemy.eposy = Enemy.eposy - enemyvelocityup; //enemies allways go in one direction
                if (Enemy.eposy === 0) { //if the Enemy object touches the upper part of the canvas
                        enemyvelocityup = - enemyvelocityup; // the enemyvelocity which is technically the direction and speed they are going canges, e.g if it is -1 it will take the value 1 and vice versa
                } else if (Enemy.eposy == canvas.height - 25) {// same goes for the bottom part of the canvas
                        enemyvelocityup = - enemyvelocityup;
                } else if (Enemy.eposy === canvas.height / 2) {// if the enemy passes through the middle of the canvas

                        Enemy.eposx = Enemy.eposx - enemyvelocitydown;// the enemy is gonna move forward a few pixels
                }


        })

}

function playerhit() { //function playerhit checks if the player has been hit


        for (i = 0; i < 24; i++) { // for every enemy in the game( allways 24 enemies )
                if (enemiesbullets[i] == undefined) { //if there is no bullet created in that instance within the array or if the bullet has been destroyed (i.e. enemy killed)
                        i++; // it's gonna go over the position i to i+1
                } else if ((enemiesbullets[i].copyx - velocity[i] < 120 && enemiesbullets[i].copyx - velocity[i] > 70 && enemiesbullets[i].copyy >= y + 10 && enemiesbullets[i].copyy <= y + 50 && destroyed == false) || (enemies[i].eposx < 120 && enemies[i].eposx - velocity[i] > 70 && enemies[i].eposy >= y + 10 && enemies[i].eposy <= y + 50 && destroyed == false)) { //condition to check if the bullet is within ship's limits
                        destroyed = true; //destroyed becomes true, meaning the ship has been touched by a bullet
                        enemiesbullets[i] = 0; //the bullet gets destroyed as well
                        destroy.currentTime = 0; //sound plays from the beginning at maximum volume, destroy current time forces the audio file to repeat if you are killed 2 times really fast
                        destroy.volume = 1;
                        destroy.play();
                }
        }





}


function hit() { //this function checks if a enemy is hit by the bullet launched by the ship
        enemies.forEach(function (Enemy, i) { //for each enemy in the enemies array
                let destroyed = false; // initial value of the enemies beying destroyed is false
                if (bulletposx + sp == Enemy.eposx - 130 && bulletposy > Enemy.eposy - 25 && bulletposy < Enemy.eposy) { //if the bullet touches one of the enemies
                        sp = 0; //bullet resets
                        bulletposy = y; //bullet resets
                        delete enemies[i]; //the enemy which has been touched gets destroyed, delete is used to not loose the order in the array, to keep the enemies in the same line
                        delete enemiesbullets[i]; //the bullet is deleted in the same time if the enemy is destroyed
                        score = score + 10; //score increases by ten
                        destroyed = true; //and the enemy gets the value destroyed
                        if (destroyed) { //if destroyed is true
                                destroy.pause(); //the sound effect of destruction is played as mentioned above, making sure that every enemy has it's own sound effect played
                                destroy.currentTime = 0;
                                destroy.play();
                                nue = nue - 1;
                                console.log(nue);
                                destroyed = false;// destroyed becomes false to stop the sound effect of destruction
                                totalenemieskilled=totalenemieskilled+1;
                        }
                }

        })
}
function drawenemy() { //function used to draw the enemy on canvas
        enemies.forEach(function (Enemy, i) { //for each enemy in the enemies array
                ctx.beginPath(); //begins to draw
                ctx.drawImage(imgenemy, Enemy.eposx, Enemy.eposy, Enemy.enemyWidth, Enemy.enemyHeight); //an image of the enemy is drawn
                ctx.fillStyle = "blue"; //fill style was used to better do the colision tests
                ctx.fill();
                ctx.closePath(); //end
        })


}



function createebullets(enemyx, enemyy) { //createebullets is the function which randomly generates bullets

        let ebposx = enemies[enemyx].eposx - 25; //bullets initially take the position of the enemy
        let ebposy = enemies[enemyy].eposy / 2;
        let bulletw = 5; //bullet size
        let bulleth = 5; //bullet size
        let createdbullet = false; //bullet initially is not created
        let copyx; // copy x and copy y is used to set the position of the bullet in movement, to have the position of the enemy but to prevent the bullet from completely following the enemy
        let copyy;
        let Bullet = { //bullet object

                ebposx: ebposx,
                ebposy: ebposy,
                bw: bulletw,
                bh: bulleth,
                createdbullet: createdbullet,
                copyx: copyx,
                copyy: copyy,
        }

        enemiesbullets.push(Bullet); //array of bullet objects
}


function drawenemybullet() { //the actual drawing of the bullet (which is a red square)


        enemiesbullets.forEach(function (Bullet, i) { //for each bullet in the enemiesbullet array

                let p = Math.floor(Math.random() * rr); //p takes a random integer value from a range between 0 and variable rr
                if (p == i && Bullet.createdbullet == false) { //if the random number is equal to the i of the bullet



                        ctx.beginPath();
                        ctx.rect(enemies[i].eposx - 5 - speed, enemies[i].eposy + 10, Bullet.bw, Bullet.bh); // the bullet on position i is beying drawn
                        ctx.fillStyle = "red"; //color of the bullet
                        ctx.fill();
                        Bullet.createdbullet = true; //bullet then takes the true value because it has been created
                        Bullet.copyx = enemies[i].eposx - 5 - speed; //takes the value of the enemy in that frame(position x)
                        Bullet.copyy = enemies[i].eposy + 10; //takes the value of the enemy in that frame(position y)
                        ctx.closePath();
                }
        })

}



function updatebulletposition() { //this function has been used to make the bullet fly towards the left side of the canvas
        enemiesbullets.forEach(function (Bullet, i) { //for each bullet in the bullet array
                if (Bullet.createdbullet == true) { //if the bullet has been created

                        ctx.beginPath();
                        ctx.rect(Bullet.copyx - velocity[i], Bullet.copyy, Bullet.bw, Bullet.bh); //the bullet is drawn according to the enemy position and the position on the x gets updated with -i every time the bullet is drawn(thus getting closer to the left side), i increments every drawing
                        ctx.fillStyle = "red"; //color
                        ctx.fill();
                        ctx.closePath();
                        velocity[i] = velocity[i] + SPEEDBULLET; //velocity of the bullet incrementing
                        if (Bullet.copyx - velocity[i] < 0) { //if the bullet goes beyong the left side of the canvas
                                Bullet.createdbullet = false; //the bullet is no longer created
                                velocity[i] = 0; //velocity resets
                                Bullet.ebposx = enemies[i].eposx - 5 - speed; //bullet takes initial values
                                Bullet.ebposy = enemies[i].eposy + 10;
                        }
                }
        })
}


function fire() {  //start fire bullet function


        if (spacebutton) { //if the key K has been pressed, (spacebar has been used initially)
                if (keypress) { //if there was a keypress
                        if (sp == 0) { //if initial position of the bullet is zero at the keypress
                                shoot.pause();  //shooting sound effect starts
                                shoot.currentTime = 0;
                                shoot.play();
                                keypress = false; //keypress becomes false

                        }

                }
                if (bulletposx + sp < 880) {
                        spacebutton = false; //if the bullet doesen't reach the end of the canvas
                        sp = sp + 5; //speed increases with 5 that means that the bullet position updates with 5 at every drawing of the bullet
                        if (upbutton) {                         //if the keyup is pressed which is key W
                                bulletposy = bulletposy + dy; //gives the bullet an oposite direction in relation to the ship
                        } else if (downbutton) {                 //same goes for key down (MEASURE TO KEEP THE BULLET ON A STRAIGHT LINE DO NOT DELETE)
                                bulletposy = bulletposy - dy;
                        }

                }
        } else if (sp != 0 && sp < canvas.width) {       // if sp is not zero (velocity),and if sp hasn't reached the end of the canvas then the bullet continues till the end of the canvas
                spacebutton = false;
                sp = sp + 5; //BULLET POSITION UPDATED AT EVERY DRAWING OF THE BULLET
                keypress = true;
                if (upbutton) { //KEEPS THE BULLET ON A STRAIGHT LINE, DO NOT DELETE
                        bulletposy = bulletposy + dy;
                } else if (downbutton) {
                        bulletposy = bulletposy - dy;
                }

        } else if (sp == canvas.width || sp >= canvas.width && spacebar) {               //if sp is the same width as the canvas or higher, 

                sp = 0; //velocity becomes zero THE BULLET TAKING THE ORIGINAL POSITION(AT THE TIP OF THE SHIP)
                bulletposy = y; //position of the bullet on the y xis takes the ships value(initial value)
                spacebutton = false;


        }


}  //end fire bullet function


function move() {  //start function move ship

        if (upbutton) {                 //if upbutton is pressed the coordinate y takes the value y plus 2, THE BULLET POSITION BEYING SSAVED CONSTANTLY TO MAKE SURE IT'S GENERATED IN THE CORRECT POSITION
                y = y - dy;
                bulletposy = bulletposy - dy;
                if (y - dy < 0) { //THIS IF KEEPS THE SHIP WITHIN THE CANVAS BUNDS, SAME FOR THE BULLET

                        y = 0;
                        bulletposy = bulletposy + 2;
                }

        } else if (downbutton) { //SAME GOES FOR DOWN BUTTON, Y TAKING +2
                y = y + dy;
                bulletposy = bulletposy + dy;
                if (y - dy > (canvas.height - 50)) { //THIS IF KEEPS THE SHIP WITHIN THE CANVAS BUNDS, SAME FOR THE BULLET
                        y = canvas.height - 49;
                        bulletposy = bulletposy - 2;
                }
        }



} //end function move ship


function drawbullet(bulletsp, bulletpos) { //THIS FUNCTION DRAWS THE BULLET ON THE SHIP TIP

        ctx.beginPath();
        ctx.rect(bulletsp + 130, bulletpos + 22.5, 5, 5);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath();
}



function drawship(index) { //THIS FUNCTION CREATES THE ANIMATION OF THE SHIP ACCORDING TO THE INDEX, IF INDEX IS 1 IMAGE 1 IS DISPLAYED,2 FOR IMAGE 2 AND 3 FOR IMAGE 3

        ctx.beginPath();
        ctx.drawImage(shipimg[index], x, y, 130, 50);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
}

function drawdestroyenemy(indexexplosionanimation) { //TEST, I DON'T WANT TO LOOSE THE FUNCTION YET, STILL HAVE TO IMPLEMENT IT
        ctx.beginPath();
        ctx.drawImage(imageexplosion[indexexplosionanimation], x, y - 25, 50, 50);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
}

function drawdestroy(indexexplosionanimation) { //DRAWS THE SHIP BEYING DESTROYED ACCORDING TO THE INDEX, IF INDEX IS ONE IMG 1 IS DISPLAYED ,2 FOR IMG2 AND SO ON

        ctx.beginPath();

        ctx.drawImage(imageexplosion[indexexplosionanimation], x, y - 25, 130, 130);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
}

function reset() { //RESET IS USED TO RESET EVERYTHING, SCORE, LIFES ETC
        score = 0;
        NoOfLifes = 2;
        retry = false;
        cx = 0;
        cy = 0;
        created = true;
        totalenemieskilled=0;
}

function GameOverScreen() { //game over screen with main menu and retry buttons
        document.getElementById("mycanvas").style.backgroundImage = "url('/Coursework1PaulLucianCosareanu/Images/bg.gif')";
        ctx.font = "30px  Arial"; //size of text
        ctx.fillStyle = "Yellow"; //color
        ctx.fillText("Game Over", canvas.width / 2 - 15, canvas.height / 2 - 15); //position
        ctx.fillText("Retry?", canvas.width / 2 - 15, canvas.height / 2 + 15); //position
        ctx.fillText("Main Menu", canvas.width / 2 - 15, canvas.height / 2 + 45); //position
        gameover.play(); //gameover music starts playing
        let name = JSON.stringify(sessionStorage.getItem("loggedInUsrEmail")); // name takes the value of the logged in user

        let usrObj = JSON.parse(localStorage[JSON.parse(name)]); // usrobject gets populated with the elements name in the localstorage

        if (sessionStorage.getItem("loggedInUsrEmail") === usrObj.username) {  //if the player playing the game in this instant
                if (score > usrObj.score) { // if the score is grater than the localstorage score
                        usrObj.score = score;  //the localstorage score is updated
                        localStorage[usrObj.username] = JSON.stringify(usrObj);



                }


        }

        if (cx >= canvas.width / 2 - 15 && cx <= canvas.width / 2 + 50 && cy >= canvas.height / 2 - 10 && cy <= canvas.height / 2 + 15) { //if user clicks within this area
                retry = true; //retry becomes true
        }
        if (cx >= canvas.width / 2 - 15 && cx <= canvas.width / 2 + 50 && cy >= canvas.height / 2 + 20 && cy <= canvas.height / 2 + 50) { //if user clicks within this area
                mainmenu = true; //mainmenu becomes true

        }
        splicearrays(); //arrays are emptied completely
        if (retry) {// if retry is true
                reset(); //everything resets including score
                createdornot();
                gameover.pause();
                gameover.currentTime = 0; //gameover sound stops


        }
        if (mainmenu) {  //if mainmenu is true
                gameover.pause(); //gameover sound stops
                gameover.currentTime = 0;
                reset(); //everyting is restarted, and the user goes back to the start game screen
                createdornot();
                gamestarted = false;
                mainmenu = false;
        }
}

function destroyedornot() { //destroyed or not displays the animation of the explosion
        if (destroyed == false) { //if it is destroyed
                drawship(index); //the ship is beying drawn according to a index parsed 
                drawbullet(bulletposx + sp, bulletposy);// bullet is drawn in the top of the ship
        } else if (destroyed) {// if it is destroyed
                drawdestroy(parseInt(indexexplosionanimation / 10) + 1);// the ship being destroye animation starts being drawn
                indexexplosionanimation++;// index increases, we divide everything by 10 so we can have one image for 10 frames
                if (indexexplosionanimation / 10 == 5) { //if it's index 5, meaning the last photo of animation
                        NoOfLifes = NoOfLifes - 1;// life decreases
                        destroyed = false;// destroyed becomes false
                        indexexplosionanimation = 0;// and index resets

                }

        }

}
function Extralife(){
        if(totalenemieskilled==150){//if the total number of enemies killed is 150 , change this to lower if you want lifes more often
                NoOfLifes=NoOfLifes+1; //you get an extra life :)
                totalenemieskilled=0;
                oneup.currentTime=0;
                oneup.volume = 1;
                oneup.play();

        }
}
function createdornot() { //createdornot is a function which checks if the enemies and bullets have been created
        index = index + 1; //the index is used in the animation for the ship, it's not relevant for this function
        if (index == 3) {
                index = 0;
        }
        if (created) { //if created equals true, tecchnically saying if enemies and bullets needs to be created
                for (i = 0; i < 6; i++) { //the images for the explosion of the ship are generated(loaded)
                        imageexplosion[i] = new Image();
                        imageexplosion[i].src = '/Coursework1PaulLucianCosareanu/Images/explozie' + (i + 1) + ".png";
                }
                for (i = 0; i < 24; i++) {// the velocity (position of the bullets) is reset back to 0 for all the bullets (24 bullets)
                        velocity[i] = 0;
                }


                for (coordinatey = 0; coordinatey < 6; coordinatey++) {  //for 4 collumns and 6 rows it creates enemies and bullets, which are 24 in total (6*4=24) if you want more enemies or more bullets, these variables need changing

                        createenemy(coordinatex, coordinatey);// creation of the enemy again
                        createebullets(coordinatex, coordinatey);//creation of the bullets again

                }
                coordinatex = coordinatex + 1; //coordinate x takes +1 value, technically doing a for loop( for some reason the for loop made the game to crash so i had to do an alternative for loop)
                if (coordinatex == 4) { //if the last collumn of enemies and bullets is generated
                        nue = 24; //the number of enemies takes 24 (6*4)
                        created = false; //created takes false meaning there is no need anymore to create enemies/ bullets
                        coordinatex = 0; // coordinate x resets so that in future can be used again from 0 to recreate enemies
                }


        }
        if (created == false) { //if created is false
                if (nue == 0) { //if the number of enemies goes down to 0
                        splicearrays(); //arrays are deleted completely
                        rr = rr - 1000; //respawn of bullets (random set to determine how fast bullets are spawned) decreases. ex: 10000-1000=9000 that meand that a random number is assigned between 0 and 9000.
                        created = true; // created equals true, that means that the process of creation can start again
                        SPEEDBULLET = SPEEDBULLET + 0.2; // THE SPEED OF THE ENEMIES BULLETS INCREASES WITH EVERY WAVE KILLED
                        if (rr <= 1000 && rr > 24) { //if the value of rr is between 1000 and 24, the game makes the set smaller with 10 every time you kill a wave of enemies
                                rr = rr - 10;
                        } else
                                if (rr <= 24) {// but if rr is < or equal to 24 it resets constantly to 24, 24 being the last level technically, and the player resists as much as he can
                                        rr = 24;
                                }
                        if (SPEEDBULLET > 4) { //IF THE SPEED BULLET GOES OVER 4, IT CONSTANTLY RESETS TO 4, AS A GAME ABOVE THAT LEVEL IT'S IMPOSSIBLE TO PLAY, IF YOU WANT TO MAKE IS IMPOSSIBLE CHANGE 4 INTO A BIGGER NUMBER
                                SPEEDBULLET = 4;
                        }
                        




                }
        }

}
function splicearrays() { //FUNCTION SPLICE ARRAY DELETES COMPLETELY THE ARRAY ON CERTAIN RANGE THAT YOU CAN INPUT.
        enemies.splice(0, enemies.length);// DELETES EVERYTHING IN THE ENEMIES ARRAY
        enemiesbullets.splice(0, enemiesbullets.length);//DELETES EVERYTHING IN THE BULLETS ARRAY
}




function Gameplay() {// GAMEPLAY IS USED TO CALL ALL THE FUNCTIONS ABOVE AT ONCE

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        destroyedornot();
        createdornot();
        drawenemy();
        drawenemybullet();
        EnemyMove();
        move();
        fire();
        hit();
        DrawScore();
        DrawLifes();
        updatebulletposition();
        playerhit();
        displayhighscore();
        Extralife();
        document.getElementById("mycanvas").style.backgroundImage = "url('/Coursework1PaulLucianCosareanu/Images/gameplay.gif')";// AS THE GAME STARTS A DIFFERENT BACKGROUND IS PLAYED 

}



function StartGame() {
        if (sessionStorage.loggedInUsrEmail != undefined) { //IF USER IS LOGGED IN
                ctx.clearRect(0, 0, canvas.width, canvas.height); // CANVAS CLEARS
                MenuStart(); //MENU IS DRAWN
                detectmouse(); //FUNCTION TO DETECT MOUSE IS CALLED
                if (gamestarted) { //IF THE GAME HAS STARTED (START GAME HAS BEEN CLICKED)
                        if (NoOfLifes > 0) { //IF THE NUMBER OF LIFES IS NOT EQUAL TO 0
                                bgm.play(); //MUSIC PLAYS
                        }
                        Gameplay(); //ALL THE FUNCTION ABOVE ARE CALLED THROUGH THE GAMEPLAY FUNCTION
                }
                if (NoOfLifes <= 0) { //IF PLAYER LOST ALL LIFES
                        bgm.pause(); // MUSIC PAUSES
                        bgm.currentTime = 0; // IT RESETS TO SECOND 0
                        ctx.clearRect(0, 0, canvas.width, canvas.height);// CANVAS STARTS CLEARING EVERYTHING
                        GameOverScreen(); //SO IT CAN DISPLAY ONLY THE GAMEOVER SCREEN



                }
        } else { //ELSE
                ctx.clearRect(0, 0, canvas.width, canvas.height); // IF USER IS NOT LOGGED IN, CANVAS CLEARS AGAIN
                ctx.font = "30px Arial";  //size of text
                ctx.fillStyle = "Yellow";  //color
                ctx.fillText("Please Log In to play the game!", canvas.width / 3 - 60, canvas.height / 2); //text position
        }// DISPLAYS AN ERROR MESSAGE IN WHICH THE USER IS ALLERTED THAT IT NEEDS TO LOG IN IN ORDER TO PLAY THE GAME
}



document.addEventListener("keyup", keyUpHandler, false); //EVENT LISTENERS TO DETECT THE KEYDOWN(keypressed) and keyup(key not pressed) FOR W,S AND K
document.addEventListener("keydown", keyDownHandler, false);
function keyDownHandler(e) {

        if (e.code == "KeyW") { //ECODE INCLUDES LOWER AND UPPERCASE LETTERS, SO IF YOU PRESS K OR k, it's still going to fire a projectille

                upbutton = true;
        } else
                if (e.code == "KeyS") {
                        downbutton = true;
                } else
                        if (e.code == "KeyK") {
                                spacebutton = true;
                        }


}



function keyUpHandler(e) {

        if (e.code == "KeyW") {

                upbutton = false;
        } else
                if (e.code == "KeyS") {
                        downbutton = false;
                } else
                        if (e.code == "KeyK") {
                                spacebutton = false;
                        }


}




setInterval(StartGame, 10);// interval in which the start game refreshes according to the canvas framerate