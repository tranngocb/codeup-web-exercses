(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(planetsString);
    var planetsArray= [];

    // TODO: Convert planetsString to an array, save it to planetsArray.
    var planetsArray =  planetsString.split('|');

    console.log(planetsArray);
    var stringBr = planetsArray.join('<br>');
    //alert(stringBr);
    console.log(stringBr);

    var stringUl = planetsArray.join('</li> <li>');
    var stringUlhead = planetsArray.join();
    stringUlhead = "<ul>" +stringUlhead+"</ul>";

    stringUl = "<li>" + stringUl+"</li>";
    console.log(stringUlhead);
    console.log(stringUl);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
})();
