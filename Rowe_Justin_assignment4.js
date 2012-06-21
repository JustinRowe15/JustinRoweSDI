/* 
Author: Justin M. Rowe
Date: 14 Jun 2012
Class: Scalable Data Infrastructures
Assignment Name: "Deliverable 4"
Assignment Description: My Library.
*/

var myLibrary = function(){
	
/* 1. Convert a string version of a number into an actual number */
	var convertNumber = function(a){ //the function convertNumber passes a string through the argument "a"
	var newNumber = parseFloat(a); // the variable newNumber parses the string and returns a floating point number
	return newNumber;
	};
	

/* 2. Format a number to use a specific number of decimal places */
	var decimalPlace = function(a,b){
		var number = b
		decimalPointStatement = "This number with " + a + " decimal places is " + number.toFixed(a);
		return decimalPointStatement;
	};

/* 3. Title-case a string */
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
	};
	//references: https://developer.mozilla.org/en/Javascript/Reference/Global_Objects/String
				  http://stackoverflow.com		

/* 4. Check difference of days between two dates */
	var differenceOfDays = function(year1,month1,day1,year2,month2,day2){ // Here, there are six arguments being passed through the function to show to separate dates
		var dateOne = new Date(year1,month1,day1); // this variable shows the new date
		var dateTwo = new Date(year2,month2,day2); // this variable show the old date
		var dateDifference = "The date difference is " + (((dateOne - dateTwo)/1000)/86400) + " days."; // this math variable shows the difference and then divides the milliseconds into days.
		return dateDifference;
	};	
	
	return {
		"convertNumber":convertNumber,
		"differenceOfDays":differenceOfDays,
		"decimalPlace":decimalPlace,
		"titleCase":titleCase,
	};

};

var newLib = new myLibrary();

var actualNumber = newLib.convertNumber("99");
console.log(actualNumber);

var capitalWords = newLib.titleCase("justin michael rowe");
console.log(capitalWords);

var dateReturn = newLib.differenceOfDays(2012,5,1,2012,3,1);
console.log(dateReturn);

newLib.decimalPlace(3,4.1234567);
console.log(decimalPointStatement);