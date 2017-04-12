/**
 * Created by bichtran on 4/12/17.
 */
"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

    var userAnswer = prompt("PLease let me know your name.");
        while (userAnswer == "") {
            userAnswer = prompt("Answer is needed.  PLease let me know your name.")
        }
        console.log("Hello "+ userAnswer + " Welcome to our site");
// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.


    var userConfirm = confirm(userAnswer + " How about a nice pizza? ");

console.log(userConfirm);
(userConfirm) ? console.log("I like Pizza too!") : console.log ("My guess, you're not an Italian " + userAnswer);

// Better to use switch loops by Justin .....

        console.log("<=======Bonus exercise=============>");

var registered = confirm("Are you registered: ");

console.log(registered);

if (registered) {
    var userName = prompt("Please enter your user name:")
    console.log(userName);
    var userPassword = prompt("Please enter your password:")
    console.log(userPassword);

}   else {
    alert("please sign in!")
    var signName = prompt("Please enter your user name:")
    console.log(signName);
    var signPassword = prompt("Please enter your password:")
    console.log(signPassword);
// nested if need to be done
}
(function)() {

})();

