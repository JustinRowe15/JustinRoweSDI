/* 
Author: Justin M. Rowe
Date: 14 Jun 2012
Class: Scalable Data Infrastructures
Assignment Name: "Deliverable 3"
Assignment Description: Shopping at the grocery store.
*/

var shoppers = ["Justin", "Emma"],
    moneyBrought = "$50.00",
    groceryList = ["bananas", "milk", "spaghetti", "bread", "soap", "butter", "corn", 
    "turkey", "aspirin"],
    numberOfCoupons = 6,
    couponAmounts = { milk: "$.75", spaghetti: "$.50", bread: "$.75", butter: "$.50", 
    corn: "$1.00", aspirin: "$2.00" }
    transactionAmounts = ["$2.10", "$3.25", "$2.00", "$3.25", "$1.75", "$2.00", "$2.00", "$3.75", "$5.00"]
    taxRate = 0.065
    
var getGroceries = function() {
	var groceryName = groceryList[groceryAmount],
		transactionAmount = transactionAmounts[groceryAmount];
	console.log("We picked up " + groceryName + " and it is going to cost " 
		+ transactionAmount);
	}
	for (var groceries = 1; groceries < groceryList.length; groceries++) {
		console.log("We have " + groceries + " groceries in the basket.");	
};   
for (var groceryAmount = 0; groceryAmount < groceryList.length; groceryAmount++) {
	getGroceries();
}

console.log("We done and ready to checkout.");	 

   
    
    
 