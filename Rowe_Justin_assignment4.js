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
	var checkEmail = function(email){
	var 
		if (){
			return true;
		} else {
			return false;
		};







	};

/* Format a number to use a specific number of decimal places */
	var decimalPlace = function(a,b){
		var number = b
		decimalPointStatement = "This number with " + a + " decimal places is " + number.toFixed(a);
		return decimalPointStatement;
	};

/* Title-case a string */
/* First, in this function, splitting the argument "words" into a separate words will allow
the rest of the function to find the first letter using the for loop.  Then it takes the first
letter using the charAt method and then applies the toUpperCase method to uppercase the first
letter.  Then it returns the argument using the join method. */

	var titleCase = function(words){   // words are passed into this function as arguments
	var wordsTitleCase = words.split(" ");  // first, creating a variable show the words split by a space in between each word
	for (var a =0; a < wordsTitleCase.length; a++) // then a for loop is passed for the for the length of the argument
		{
		var b = wordsTitleCase[a].charAt(0).toUpperCase(); // this variable demonstrates the first character of each word to be uppercased
		wordsTitleCase[a] = b + wordsTitleCase[a].substr(1); // this math show the addition of the variable b to the substr method of this wordsTitleCase variable
		}
	return wordsTitleCase.join(" "); // this returns the variable after joining the words
	
	//references: https://developer.mozilla.org/en/Javascript/Reference/Global_Objects/String
				  http://stackoverflow.com		

/* Check difference of days between two dates */
	var differenceOfDays = function(year1,month1,day1,year2,month2,day2){
		var dateOne = new Date(year1,month1,day1);
		var dateTwo = new Date(year2,month2,day2);
		var dateDifference = "The date difference is " + (((dateOne - dateTwo)/1000)/86400) + " days.";
		return dateDifference;
	};	
	
	return {
		"differenceOfDays":differenceOfDays,
		"decimalPlace":decimalPlace,
		"titleCase":titleCase,
	};

};

var newLib = new myLibrary();

var capitalWords = newLib.titleCase("justin michael rowe");
console.log(capitalWords);

var dateReturn = newLib.differenceOfDays(2012,5,1,2012,3,1);
console.log(dateReturn);

newLib.decimalPlace(3,4.1234567);
console.log(decimalPointStatement);