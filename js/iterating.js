/**
 * Created by bichtran on 4/12/17.
 */

    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['John', 'justin', 'Maria', 'David'];


// declare an empty array
  //  var emptyArray = [];
    // TODO: Create a log statement that will log the number of elements in the names array.
//var arrayLenght = names.lenght;
console.log('There are ' + names.length + ' names in the array');



console.log('The 1st index is: ' + names[0]);
console.log('The 2nd index is: ' + names[1]);
console.log('The 3rd index is: ' + names[2]);
console.log('The 4th index is: ' + names[3]);


    // TODO: Create log statements that will print each of the names array elements individually.

console.log ("excercise with loop=====" );

for (var i = 0; i < names.length; i++) {
    console.log('The name at index ' + i + ' is: ' + names[i]);

}


