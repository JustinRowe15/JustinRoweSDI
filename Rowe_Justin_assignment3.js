/* 
Author: Justin M. Rowe
Date: 14 Jun 2012
Class: Scalable Data Infrastructures
Assignment Name: "Deliverable 3"
Assignment Description: Running errands.
*/

/* global variables */
var toDoListJustin = { 
		placesToGo: {
			0:
				{
					Place: "Grocery Store",
					Name:"Safeway",
					Address:"123 M Street",
					City:"Alexandria",
					State:"Virginia",
				},
			1:
				{
					Place: "Gas Station",
					Name:"Chevron",
					Address:"456 K Street",
					City:"Springfield",
					State:"Virginia",
				},
			2:
				{
					Place: "Bank",
					Name:"Bank of America",
					Address:"789 A Street",
					City:"Mount Vernon",
					State:"Virginia",
				}
			}, /* JSON Data */	
	checkMoney: function(){
		console.log("Yes, I have money.");
		}, /* String Function 1 within object */		
	}, /* property:object with array and function */
	enoughMoney = true, /* property:boolean */
	moneyBrought = 100.00, /* property:string */
    groceryList = ["bananas", "milk", "spaghetti", "bread", "soap", "butter", "corn", 
    "turkey", "aspirin"], /* property:array */
    numberOfCoupons = 6, /* property:number */
    couponAmounts = { milk: .75, spaghetti: .45, bread: .70, butter: .55, 
    corn: 1.00, aspirin: 2.00 }, /* property:object */ 
    transactionAmounts = [2.10, 3.25, 2.00, 3.25, 1.75, 2.00, 2.00, 3.75, 5.00]; /* property:array */

var todayDateTime = new Date(2012,5,15); /* String accessor */
console.log("Today is " + todayDateTime + ".");

toDoListJustin.checkMoney();

function moneyCheck() {
	if (enoughMoney === true) {
        console.log("We have " + moneyBrought + " dollars, so let's first go to the " + toDoListJustin.placesToGo[0].Place + ".");
	} else {
        console.log("Not enough money to spend today, will have to wait till pay day.");
    }
} /* Procedure with "back" and conditional statement and pull from JSON data */

moneyCheck();
    
var getGroceries = function(groceryAmount) {
	var groceryName = groceryList[groceryAmount],
		transactionAmount = transactionAmounts[groceryAmount];
		console.log("We picked up " + groceryName + " and it is going to cost $" 
		+ transactionAmount);
		}
		for (var groceries = 1; groceries < groceryList.length; groceries++) {
		console.log("We have " + groceries + " groceries in the basket.");	
}; /* String Function 2 with for loop and argument:number*/

var getAllGroceries = function (){
	for (var groceryAmount = 0; groceryAmount < groceryList.length; groceryAmount++) {
	getGroceries(groceryAmount);
	}
}  /* Number Function 1 with for loop and argument:string */ 

getAllGroceries();

console.log("We're done and ready to checkout.");

var totalBeforeCoupons = function(){
	amountBeforeCoupons = transactionAmounts[0]+ transactionAmounts[1] + transactionAmounts[2] +
						transactionAmounts[3] + transactionAmounts[4] + transactionAmounts[5] +
						transactionAmounts[6] + transactionAmounts[7] + transactionAmounts[8];
	return amountBeforeCoupons;
}

var totalAmount = totalBeforeCoupons();
console.log("Before coupons, your total is $" + totalAmount + ".");
/* return:Array */

var checkOut = function() {
	var totalCostBeforeCoupons = (2.10 + 3.25 + 2.00 + 3.25 + 1.75 + 2.00 + 2.00 + 3.75 + 5.00),
	totalAmountOfCoupons = (.75 + .45 + .70 + .55 + 1.00 + 2.00),
	milkCost = (transactionAmounts[0] - couponAmounts.milk);
	console.log("With your coupon, your new cost for milk is $" + milkCost + ".");
	var spaghettiCost = (transactionAmounts[2] - couponAmounts.spaghetti);
	console.log("With your coupon, your new cost for spaghetti is $" + spaghettiCost + ".");
	var breadCost = (transactionAmounts[3] - couponAmounts.bread);
	console.log("With your coupon, your new cost for bread is $" + breadCost + ".");
	var butterCost = (transactionAmounts[5] - couponAmounts.butter);
	console.log("With your coupon, your new cost for butter is $" + butterCost + ".");
	var cornCost = (transactionAmounts[6] - couponAmounts.corn);
	console.log("With your coupon, your new cost for milk is $" + cornCost + ".");
	var aspirinCost = (transactionAmounts[8] - couponAmounts.aspirin);
	console.log("With your coupon, your new cost for Aspirin is $" + aspirinCost + ".");
	var totalAfterCoupons = (totalCostBeforeCoupons - totalAmountOfCoupons);
	console.log("Your total is $" + totalAfterCoupons + " and you saved a total of $" + totalAmountOfCoupons + ".");
} /* Number Function 2 with math and object properties */

checkOut();

function payForGroceries(moneyBrought,totalAfterCoupons){
	var changeBack = moneyBrought - totalAfterCoupons;
	return changeBack;
} /* Number Function 3 */

var moneyLeft = payForGroceries(100.00,19.65);
console.log("Here's your change, $" + moneyLeft + "."); /* method:function, return:number and argument:number */

console.log("We have " + moneyLeft + " and need to go get gas.  It's 5 miles to the nearest gas station.")

var driveToGasStation = function(){
	var milesToGasStation = 0;
	var i = 0;
	while (i < 5) {
	milesToGasStation = milesToGasStation + 1; i++;
	}	
	console.log("We've driven " + milesToGasStation + " miles.  We're at the gas station.");
} /* Number Function 4 with while loop*/

driveToGasStation();

var carFill = {
	gasStationOpen: true,
	carName: "Toyota",
	tankSizeInGallons: 10,
	moneyOnHand: 80.35,
	costPerGallon: 3.50,
	premiumGasAvailable : false,
	pumpGas: function() {
		if (carFill.gasStationOpen === true){
			console.log("They're open, we can pump gas.")
			if (carFill.premiumGasAvailable === true){
				console.log("They have premium available.")
				} else {
				console.log("They ran out of premium, so let's get mid-grade.") /* nested conditional */
				}
		} else {
			console.log("They're closed, we have to find another station that's open.")
		}
		return carFill.gasStationOpen;
	}, /* String Function 3 */
	fullTankCost: function(){
		totalCostOfGas = this.tankSizeInGallons * this.costPerGallon;
		doneFillingTank = "The " + this.carName + " is filled with gas and it cost us $" + totalCostOfGas + ".";
		return doneFillingTank;
	} /* String Function 4 */
}

var readyToPumpGas = carFill.pumpGas(); /* accessor method */
console.log(readyToPumpGas);

var readyToLeave = carFill.fullTankCost();
console.log(readyToLeave);

function changeBackAfterGas(moneyOnHand,totalCostOfGas) {
	var changeBackAgain = carFill.moneyOnHand - totalCostOfGas;
		return changeBackAgain;
} /* Number Function 5 */

var moneyLeftAfterGas = changeBackAfterGas(80.35,35.00);
console.log("Here is your change, $" + moneyLeftAfterGas + ".");

var bankName = "Bank of America",
	bank = {
	bankOpen: true,
	closingTime: "5 PM",
	amountToDeposit: 45.34,
}

var depositMoney = function () {
	if (bank.bankOpen === true) {
		console.log ("The " + bankName + " is open, time to deposit what we have left.")
	} else {
		console.log ("The " + bankName + " is closed.  Have to try again tomorrow.")
	}
	return bank.bankOpen;
} /* String Function 5 */

depositMoney()