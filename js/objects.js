
(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
    var person = {};
    console.log(typeof person);

    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */
    person.firstName = "Bich";
    person.lastName = "Tran-Ngoc";
    person.sayHello = function() {
        return this.firstName + " " + this.lastName;
    };

    console.log("My name is " + person.sayHello());
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */



    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
        // Add the missing 35% OFF  when buy more 200$
    var shoppers = [
            {name: 'Cameron', amount: 180.00},
            {name: 'Ryan', amount: 250.00},
            {name: 'George', amount: 320.00},
            {name: 'Bichovich', amount: 420.00}
        ];
    var discount = .35;
    var toPay = 0.00;
    var discountAmount = 0.00;
  //  console.log(shoppers.name);
    shoppers.forEach(function(element) {
        if (element.amount > 200) {
            discountAmount = element.amount * discount
            toPay = element.amount - discountAmount;
        } else {
            toPay = element.amount;
        }

        console.log("The shopper " + element.name + " spend: " + element.amount + " and paid after discount of:"+ discountAmount + " Total: " +toPay);
    });

})();
