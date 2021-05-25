let a = true; //boolean value
let arrayofusers = []; //array in which the users are parsed from the localstorage
let stringofotherelements = ""; //strin of other elements is a string in which players which are on rank >=4 are written


function displayranking() {
    for (i = 0; i < localStorage.length; i++) {//for every element in the localstorage
        if (a) { // if true
            let usr = JSON.parse(localStorage.getItem(localStorage.key(i)));
            arrayofusers.push(usr); // array of users gets populated with localstorage elements


        }
    }
    for (i = 0; i < arrayofusers.length; i++) { //sort of the elements within the array based on score
        for (j = 0; j < arrayofusers.length - 1; j++) {
            if (arrayofusers[j].score < arrayofusers[j + 1].score) {
                aux = arrayofusers[j]; //basic sort algorithm
                arrayofusers[j] = arrayofusers[j + 1];
                arrayofusers[j + 1] = aux;

            }
        }

    }
    a = false; //boolean becomes false thus the sort happens only one time, whenever the page is loaded
    for (i = 3; i < arrayofusers.length; i++) {
        stringofotherelements = stringofotherelements + "<br>" + arrayofusers[i].username + " from "+arrayofusers[i].country+" has won the " + (i + 1) + "th place within the game, " + arrayofusers[i].score + " points!<br> "; //other usernames from 4 th place to the last, sorted
    }
    for (i = 0; i < arrayofusers.length; i++) {
        if (i == 0) {

            document.getElementById("firstplace").innerHTML =arrayofusers[i].username + " from "+arrayofusers[i].country+" wins the first place with " + arrayofusers[i].score + " points"; //display in the html file the first place
        } else if (i == 1) {
            document.getElementById("secondplace").innerHTML = arrayofusers[i].username + " from "+arrayofusers[i].country+" wins the second place with " + arrayofusers[i].score + " points"; //display into the html file the second place

        } else if (i == 2) {
            document.getElementById("thirdplace").innerHTML = arrayofusers[i].username + " from "+arrayofusers[i].country+" wins the third place with " + arrayofusers[i].score + " points"; //display into the html file the third place

        } else {
            document.getElementById("therest").innerHTML = stringofotherelements; //display into the html file the  other usernames from 4th place to the last
        }

    }
}