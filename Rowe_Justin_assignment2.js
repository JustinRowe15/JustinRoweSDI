/* 
Author: Justin M. Rowe
Date: 7 Jun 2012
Class: Scalable Data Infrastructures
Assignment Name: "Deliverable 2"
Assignment Description: Attending the Tailgater Before the Football Game
*/

var setUpTailgater = true,
    tailgateHotDogs = 12,
    beerBroughtToGame = 30,
    typesOfBeers = ["Bud Light", "Coors Light", "Miller Lite"],
    budLight = 10,
    coorsLight = 10,
    millerLite = 10,
    beersConsumed = [7, 4, 11, 8],
    tailgaters = ["Justin", "Steve", "James", "Alex"],
    minutesOnGrill = 10,
    bagsOfChips = 3,
    beerNumber = 1,
    minutesTillGame = 20;

var droveToStadium = function (name, car) {
	console.log(name + " drove his " + car + " to the stadium for the game.");
};

function setUpBBQ() {
	if (setUpTailgater === true) {
        console.log("We're all here, let's set up this tailgater!");
	} else {
        console.log("We'll have to wait... Bummer.");
    }
}

function getBeers() {
	var beerTotal = budLight + coorsLight + millerLite; 
	console.log(beerTotal + " beers ready to drink!");
}

function minutesTillGameStarts() {
	for (minutesTillGame = 20; minutesTillGame > 0; minutesTillGame -= 5) {
	    console.log("There's " + minutesTillGame + " minutes before the game starts!");
    }
}

function drinkAllBeers() {
	for (beerNumber = 1; beerNumber < typesOfBeers.length; beerNumber += 1) {
	    console.log(tailgaters[3] + " tested " + beerNumber + " and his favorite so far is " + typesOfBeers[1]);
    }
}

function eatChips() {
	while (bagsOfChips > 0) {
	    console.log("We ate " + bagsOfChips + " bags of chips and we're already starting to get full!");
        bagsOfChips -= 1;
    }
}

droveToStadium(tailgaters[0], "Toyota");
droveToStadium(tailgaters[1], "Ford");
droveToStadium(tailgaters[2], "Honda");
droveToStadium(tailgaters[3], "Chevy");

console.log(tailgaters[0] + " brought " + tailgateHotDogs + " hot dogs to the football tailgater.");
console.log(tailgaters[1] + " brought " + beerBroughtToGame + " beers also to the tailgater.");
console.log(tailgaters[2] + " brought the BBQ grill and will cook the hot dogs.");

setUpBBQ();

for (minutesOnGrill = 10; minutesOnGrill > 0; minutesOnGrill -= 2) {
	console.log("There's " + minutesOnGrill + " minutes left before we eat!");
}

console.log("Food is ready, now let's chow down!");

getBeers();

eatChips();

while (tailgateHotDogs > 0) {
	console.log("We have " + tailgateHotDogs + " hot dogs left before we run out.");
    tailgateHotDogs -= 1;
}

for (beerBroughtToGame = 30; beerBroughtToGame > 0; beerBroughtToGame -= 5) {
	console.log("We have " + beerBroughtToGame + " beers left before the game starts.");
}

for (i = 0, j = tailgaters.length; i < j; i += 1) {
	console.log(tailgaters[i] + " has consumed " + beersConsumed[i] + " beers, is already drunk and ready to go to the game.");
}

drinkAllBeers();

console.log("We're out of hot dogs and beer, let's see how much time till we'll all walk to the stadium.");

minutesTillGameStarts();

console.log("We have to go now or we're going to miss the game!");
