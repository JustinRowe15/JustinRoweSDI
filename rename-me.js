/* 
Author: Justin M. Rowe
Date: 7 Jun 2012
Class: Scalable Data Infrastructures
Assignment Name: "Deliverable 2"
Assignment Description: Attending the Tailgater Before the Football Game
*/

var tailgateHotDogs = 12,
budLightBeer = 30,
tailgaters = ["Justin", "Steve", "James", "Alex"],
minutesOnGrill = 10;

console.log(tailgaters[0] + " brought " + tailgateHotDogs + " hot dogs to the football tailgater.")
console.log(tailgaters[1] + " brought " + budLightBeer + " beers also to the tailgater.")
console.log(tailgaters[2] + " brought the BBQ grill and will cook the hot dogs.")

for (var minutesOnGrill = 10; minutesOnGrill > 0; minutesOnGrill-=2){
	console.log("There's " + minutesOnGrill + " minutes left before we eat!")
};

console.log("Food is ready, now let's chow down!");

while (tailgateHotDogs > 0) {
	console.log("We have " + tailgateHotDogs + " hot dogs left before the game starts.")
tailgateHotDogs--;
};

for (var budLightBeer = 30; budLightBeer > 0; budLightBeer-=6) {
	console.log("We have " + budLightBeer + " beers left before the game starts.")
};

console.log("We're out of hot dogs and beer, let's see how much time till we all walk to the stadium.");