/**
 * Created by bichtran on 4/10/17.
 */
'use strict';

var averageGrade = (95+80+75)/3;

if (averageGrade >= 80) {
    console.log("You're awesome");
} else if (averageGrade <= 75) {
    console.log("You need to practice more");
} else {
    console.log("the loop will never goes here");
}
document.writeln("Average Grade to evaluate: " + averageGrade.toFixed(2));
//  HEB discount

// var ryan = "Ryan", Cameron = "Cameron", George = "George"
/* var amountPaid = 250.00;
var customerName = "Ryan";
var discount = 0.00;
if (amountPaid > 200.000) {
    discount = amountPaid * 0.35;
    amountPaid = amountPaid - discount;
    console.log("Your discount is: " + discount);
    console.log(customerName + " bought amount paid: " + amountPaid);

}  else {
    console.log(customerName +" Thank you for shopping at HEB")
} */
var originalAmount = 250.00;
var amountPaid = 0.00;
var customerName = "Ryan";
var discount = 0.00;
if (originalAmount > 200.000) {
    discount = originalAmount * 0.35;
    amountPaid = originalAmount - discount;
    console.log("Your discount is: " + discount);
    console.log(customerName + " bought " + originalAmount+ "$ worth of goods.");
    console .log("Final payment: " + amountPaid);

}  else {
    console.log(customerName +" Thank you for shopping at HEB")
}

document.writeln("Total discount you received: " + discount);


/*=========*/
var flipACoin = Math.floor(Math.random()* 2);

var message = (flipACoin == 0) ? "Buy a car" : "Buy a house";

console.log("Isaac decides to " + message);

document.writeln("Isaac decides to " + message);