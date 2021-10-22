"use strict";

//These are the vars with assigned arrays that will be used to pull data from
let randomDestinations = ['Puerto Rico','Hawaii','Florida','Alaska','Tatooine'];
let randomRestaurants = ["Oga's Cantina","The Cheesecake Factory","L&L Diner","Shokunin","Ruby Tuesday"];
let randomTransportation = ["Plane","Boat","DeLorean","Horse Carriage","Bus"];
let randomEntertainment = ['Symphony','Broadway Play','Sight-Seeing','Baseball Game','Watch a Movie'];

function randomizeDestination(destinationAnswer){
    let randomDestination;
    randomDestination = Math.floor(Math.random() * randomDestinations.length);
    console.log(randomDestination)
}

randomizeDestination("Yes");