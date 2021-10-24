"use strict";

//These are the vars with assigned arrays that will be used to pull data from
let mustGoDestination = ['Puerto Rico','Hawaii','Florida','Alaska','Tatooine'];
let mustGoRestaurant = ["Oga's Cantina","The Cheesecake Factory","L&L Diner","Shokunin","Ruby Tuesday"];
let modeOfTransportation = ["Plane","Boat","DeLorean","Horse Carriage","Bus"];
let typeOfEntertainment = ['Symphony','Broadway Play','Sight-Seeing','Baseball Game','Watch a Movie'];

//Randomizer for Destinations
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
//alert(randomizeDestination());

//Randomizer for Restaurants
function randomizeRestaurant(chosenRestaurant){
    let restaurantAnswer = Math.floor(Math.random() * mustGoRestaurant.length);
    if(restaurantAnswer === 0){
        chosenRestaurant = mustGoRestaurant[0];
    } else if(restaurantAnswer === 1){
        chosenRestaurant = mustGoRestaurant[1];
    } else if(restaurantAnswer === 2){
        chosenRestaurant = mustGoRestaurant[2];
    } else if(restaurantAnswer === 3){
        chosenRestaurant = mustGoRestaurant[3];
    } else if(restaurantAnswer === 4){
        chosenRestaurant = mustGoRestaurant[4];
    }
    return chosenRestaurant;
}
//alert(randomizeRestaurant());

//Randomizer for Transportation
function randomizeTransportation(chosenTransportation){
    let transportationAnswer = Math.floor(Math.random() * modeOfTransportation.length);
    if(transportationAnswer === 0){
        chosenTransportation = modeOfTransportation[0];
    } else if(transportationAnswer === 1){
        chosenTransportation = modeOfTransportation[1];
    } else if(transportationAnswer === 2){
        chosenTransportation = modeOfTransportation[2];
    } else if(transportationAnswer === 3){
        chosenTransportation = modeOfTransportation[3];
    } else if(transportationAnswer === 4){
        chosenTransportation = modeOfTransportation[4];
    }
    return chosenTransportation;
}
//alert(randomizeTransportation());

//Randomizer for Entertainment
function randomizeEntertainment(chosenEntertainment){
    let entertainmentAnswer = Math.floor(Math.random() * typeOfEntertainment.length);
    if(entertainmentAnswer === 0){
        chosenEntertainment = typeOfEntertainment[0];
    } else if(entertainmentAnswer === 1){
        chosenEntertainment = typeOfEntertainment[1];
    } else if(entertainmentAnswer === 2){
        chosenEntertainment = typeOfEntertainment[2];
    } else if(entertainmentAnswer === 3){
        chosenEntertainment = typeOfEntertainment[3];
    } else if(entertainmentAnswer === 4){
        chosenEntertainment = typeOfEntertainment[4];
    }
    return chosenEntertainment;
}
//alert(randomizeEntertainment());