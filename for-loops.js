//Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. 
//Stop execution of the loop if the counter variable's value is greater than 120.
for (var i = 5; i <= 120; i = i +10) {
//Use console.log() to output the value of the counter variable each time through the loop. 
	console.log("Current value is", i);
}

//Write a for loop with a counter variable initialized at 4096. 
//Each time the loop executes divide the counter variable's value by 2. 
//When the counter variable's value is 1, stop execution
for (var i = 4096; i >= 1; i = i / 2) {
//Use console.log() to output its value every time. 
	console.log("Current value is", i);
}

//Create an array that contains the names of American Presidents. 
var presidents = ["George Washington", "John Adams", "Thomas Jefferson"];
//Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President.
for (var i = 0; i < presidents.length; i++) {
	console.log("President #" + parseInt(i + 1) + " was " + presidents[i]);
}

//Iterate over the object below and use console.log() to output the names of the keys in the object.
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
};

for (var key in antSpecies) {
	console.log(key + ":", antSpecies.key);
}