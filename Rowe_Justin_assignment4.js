/* 
Author: Justin M. Rowe
Date: 14 Jun 2012
Class: Scalable Data Infrastructures
Assignment Name: "Deliverable 4"
Assignment Description: My Library.
*/

var myLibrary = function(){

/* check numeric function */

	var checkNumeric = function(val){
		if (isNaN(val()){
			return false;
		} else {
			return true;
		};
	};
	
/* Check Phone Number */

	var checkPhoneNumber = function(val){
		var
		if (){
			return true;
		} else {
			return false;
		};
	};






/* Check email address */	















/* Check URL Function */

	var checkURL = function(val){
		var first = val.substring(0,val.indexOf(":"));
		if ( ){
			return true;
		} else {
			return false;
		};
	};
	
	
	
/* Title-case a string */


	var titleCase = function(val){
		var








/* Format a number to use a specific number of decimal places */

	var decimalPlace = function(val){
		var number = 7.25678
		console.log("This number with " val " decimal places is " + number.toPrecision(val));
		return number


	};





/* String number to actual Number */


	var actualNumber = function(val){
		var 

	return {
		"checkNumeric":checkNumeric,
		"checkURL":checkURL,
		"decimalPlace":decimalPlace
	};

};

var newLib = new myLibrary();
decimalPlace(2);
