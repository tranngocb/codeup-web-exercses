(function(){
"use strict";

// TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter","Saturn", "Uranus"];

// function for logging the planets array
function logPlanets() {
    console.log("Here is the list of planets:");
    console.log(planets);
    console.log("---- ---- ---- ----");
}

logPlanets();

console.log('Adding "The Sun" to the beginning of the planets array.');
// TODO: Read the console.log() statement above. Write code to perform the step it describes.

    planets.unshift("The Sun");
logPlanets();

console.log('Adding "Pluto" to the end of the planets array.');
// TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.push("Pluto");
logPlanets();

console.log('Removing "The Sun" from the beginning of the planets array.');
// TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.shift("the Sun");
logPlanets();

console.log('Removing "Pluto" from the end of the planets array.');
// TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.pop("Pluto");
logPlanets();

console.log('Finding and logging the index of "Earth" in the planets array.');
var earthIndex = planets.indexOf("Earth");
/* To trace only */
console.log("Index of Earth " + earthIndex);
// TODO: Read the console.log() statement above. Write code to perform the step it describes.

    console.log('Using splice to remove the planet after "Earth".');
    planets.splice(earthIndex,1);
// TODO: Read the console.log() statement above. Write code to perform the step it describes.
logPlanets();

console.log('Using splice to add back the planet after "Earth".');
    planets.splice(earthIndex,0, "Earth" );
// TODO: Read the console.log() statement above. Write code to perform the step it describes.
logPlanets();

console.log("Reversing the order of the planets array.");
    planets.reverse();
// TODO: Read the console.log() statement above. Write code to perform the step it describes.
logPlanets();

console.log("Sorting the planets array.");
    planets.sort();
// TODO: Read the console.log() statement above. Write code to perform the step it describes.
logPlanets();
})();