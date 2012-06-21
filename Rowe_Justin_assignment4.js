/* 
Author: Justin M. Rowe
Date: 14 Jun 2012
Class: Scalable Data Infrastructures
Assignment Name: "Deliverable 4"
Assignment Description: My Library.
*/

var myLibrary = function(){
	
/* Check Phone Number */

	/*var checkPhoneNumber = function(val){
		var
		if (){
			return true;
		} else {
			return false;
		};
	};*/






/* Check email address */	















/* Check difference of days between two dates */
	var differenceOfDays = function(year1,month1,day1,year2,month2,day2){
		var dateOne = new Date(year1,month1,day1);
		var dateTwo = new Date(year2,month2,day2);
		var dateDifference = "The date difference is " + (dateOne.getTime() - dateTwo.getTime()) + ".";
		return dateDifference;
	};	

/* Format a number to use a specific number of decimal places */
	var decimalPlace = function(a,b){
		var number = b
		decimalPointStatement = "This number with " + a + " decimal places is " + number.toFixed(a);
		return decimalPointStatement;
	};

/* Title-case a string */
	var titleCase = function(){



	};
	
	return {
		"differenceOfDays":differenceOfDays,
		"decimalPlace":decimalPlace,
		"titleCase":titleCase,
	};

};

var newLib = new myLibrary();

newLib.decimalPlace(3,4.1234567);
console.log(decimalPointStatement);

newLib.differenceOfDays(2012,5,1,2012,3,1);
console.log(dateDifference);