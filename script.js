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

//Function results compiled into simplified variables
let destinationResult = "Destination: " + ' ' + randomizeDestination();
let restaurantResult = "Restaurant: " + ' ' + randomizeRestaurant();
let transportationResult = "Transportation: " + ' ' + randomizeTransportation();
let entertainmentResult = "Entertainment: " + ' ' + randomizeEntertainment();


//#1 - Initial popup with trip details
alert("Your Trip Details \n \n" + destinationResult + '\n' + restaurantResult + '\n' + transportationResult + '\n' + entertainmentResult);

//#2 - Satisfaction prompt
function userConfirmation(){
    let userSatisfaction = prompt("Are you satisfied with your trip details? Enter Yes or No.");
    switch(userSatisfaction){
        case "Yes":
            alert("Thank you for traveling with devCodeCamp!");
            break;
        case "yes":
            alert("Thank you for traveling with devCodeCamp!");
            break;
        case "No":
            userAnswer();
            break;
        case "no":
            userAnswer();
            break;
        default:
            alert("Your Trip Details \n \n" + destinationResult + '\n' + restaurantResult + '\n' + transportationResult + '\n' + entertainmentResult);
            break;
    }
}
alert(userConfirmation());

//#3 - Trip detail change options
function userAnswer(){
    let detailChange = prompt("What trip detail would you like to change?\n" + "1 for Destination\n" + "2 for Restaurant\n" + "3 for Transportation\n" + "4 for Entertainment\n");
    switch(detailChange){
        case '1':
            let changeDestination = "Destination: " + ' ' + randomizeDestination();
            alert("Your Trip Details \n \n" + changeDestination + '\n' + restaurantResult + '\n' + transportationResult + '\n' + entertainmentResult);
            break;
        case '2':
            let changeRestaurant = "Restaurant: " + ' ' + randomizeRestaurant();
            alert("Your Trip Details \n \n" + destinationResult + '\n' + changeRestaurant + '\n' + transportationResult + '\n' + entertainmentResult);
            break;
        case '3':
            let changeTransporation = "Transportation: " + ' ' + randomizeTransportation();
            alert("Your Trip Details \n \n" + destinationResult + '\n' + restaurantResult + '\n' + changeTransporation + '\n' + entertainmentResult);
            break;
        case '4':
            let changeEntertainment = "Entertainment: " + ' ' + randomizeEntertainment();
            alert("Your Trip Details \n \n" + destinationResult + '\n' + restaurantResult + '\n' + transportationResult + '\n' + changeEntertainment);
            break;
        default:
            alert("Your Trip Details \n \n" + destinationResult + '\n' + restaurantResult + '\n' + transportationResult + '\n' + entertainmentResult);
            break;
    }
}