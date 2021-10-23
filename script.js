"use strict";

//These are the vars with assigned arrays that will be used to pull data from
let mustGoDestination = ['Puerto Rico','Hawaii','Florida','Alaska','Tatooine'];
let mustGoRestaurant = ["Oga's Cantina","The Cheesecake Factory","L&L Diner","Shokunin","Ruby Tuesday"];
let modeOfTransportation = ["Plane","Boat","DeLorean","Horse Carriage","Bus"];
let typeOfEntertainment = ['Symphony','Broadway Play','Sight-Seeing','Baseball Game','Watch a Movie'];


function randomizeDestination(chosenDestination){
    let destinationAnswer = Math.floor(Math.random() * mustGoDestination.length);
    if(destinationAnswer === 0){
        chosenDestination = mustGoDestination[0];
    } else if(destinationAnswer === 1){
        chosenDestination = mustGoDestination[1];
    } else if(destinationAnswer === 2){
        chosenDestination = mustGoDestination[2];
    } else if(destinationAnswer === 3){
        chosenDestination = mustGoDestination[3];
    } else if(destinationAnswer === 4){
        chosenDestination = mustGoDestination[4];
    }
    return chosenDestination;
}
alert(randomizeDestination());