/* 
Author: Justin M. Rowe
Date: 14 Jun 2012
Class: Scalable Data Infrastructures
Assignment Name: "Deliverable 3"
Assignment Description: Shopping at the grocery store.
*/

var moneyBrought = "$20.00",
    groceryList = ["bananas", "milk", "spaghetti", "bread", "soap", "butter", "corn", 
    "turkey", "aspirin"],
    numberOfCoupons = 6,
    couponAmounts = { milk: .75, spaghetti: .45, bread: .70, butter: .55, 
    corn: 1.00, aspirin: 2.00 }
    transactionAmounts = [2.10, 3.25, 2.00, 3.25, 1.75, 2.00, 2.00, 3.75, 5.00]
    taxRate = 0.065
    
var getGroceries = function(groceryAmount) {
	var groceryName = groceryList[groceryAmount],
		transactionAmount = transactionAmounts[groceryAmount];
		console.log("We picked up " + groceryName + " and it is going to cost $" 
		+ transactionAmount);
		}
		for (var groceries = 1; groceries < groceryList.length; groceries++) {
		console.log("We have " + groceries + " groceries in the basket.");	
};
var getAllGroceries = function (){
	for (var groceryAmount = 0; groceryAmount < groceryList.length; groceryAmount++) {
	getGroceries(groceryAmount);
	}
}   

getAllGroceries();

console.log("We're done and ready to checkout.");

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
	}

checkOut();

// var payForGroceries = function(money);