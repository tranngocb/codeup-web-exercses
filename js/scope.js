/**
 * Created by bichtran on 4/12/17.
 */
"use strict";
(function(){
        var myNameIs = 'Bich'; // TODO: Fill in your name here.

        /**
         * TODO:
         * Create a function called 'sayHello' that takes a parameter 'name'.
         * When called, the function should return a message that says hello to the passed in name.
         *
         * Example
         *  > sayHello("codeup") // returns "Hello, codeup!"
         */
        function sayHello (name) {

            console.log("Hello " +name);

        }

        sayHello(myNameIs);

        var random = Math.floor((Math.random()* 100) + 1);

        function isOdd(number) {
            var modNumber = number%2;
            console.log("Nuber passsed: " + number);
            (modNumber) ? console.log("it's a odd number.") : console.log("it's a even number.");
        }

        isOdd(random);
})();

