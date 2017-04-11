/**
 * Created by bichtran on 4/10/17.
 */
var luckyNumber = Math.floor(Math.random()* 6);

var receipt = 60.00;
/* var luckyNumber = 1; */
var discountReceive = 0.00;
console.log(luckyNumber);
switch (luckyNumber) {
    case 0:
        console.log("Good luck for next time");

        break;
    case 1:
        console.log("You're receiving: 10%");
        discountReceive = receipt * .10;
        receipt = receipt - discountReceive;
        break;
    case 2:
        console.log("You're receiving: 25%");
        discountReceive = receipt * .25;
        receipt = receipt - discountReceive;
        break;
    case 4:
        console.log("You're receiving: 50%");
        discountReceive = receipt * .50;
        receipt = receipt - discountReceive;
        break;
    case 5:
        console.log("All is free");
        receipt = 0;
        break;
    default:
        console.log("I have no clue.");
}

console.log("Your receipt will be: " + receipt)

// Month conversion


var monthNumber = Math.floor(Math.random()* 13);
var monthName = "";
console.log(monthNumber);
switch (monthNumber) {
    case 1:
        monthName = "January";
        console.log("Month of "+ monthName );
        break;
    case 2:
        monthName = "Febrary";
        console.log("Month of " + monthName );
        break;
    case 3:
        console.log("Month of March");
        break;
    case 4:
        console.log("Month of Avril");
        break;
    case 5:
        console.log("Month of May");
        break;
    case 6:
        console.log("Month of June");
        break;
    case 7:
        monthName = "July";
        console.log("Month of " + monthName);
        break;
    case 8:
        monthName = "August";
        console.log("Month of " + monthName);
        break;
    case 9:
        monthName = "September";
        console.log("Month of " + monthName);
        break;
    case 10:
        monthName = "October";
        console.log("Month of " + monthName);
        break;
    case 11:
        monthName = "November";
        console.log("Month of " + monthName);
        break;
    case 12:
        monthName = "December";
        console.log("Month of " + monthName);
        break;
    default:
        console.log("I have no clue.");
}