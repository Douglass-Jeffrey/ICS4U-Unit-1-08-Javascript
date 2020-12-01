/*
* Generates random numbers from user inputted parameters and stores them in an
* an array before outputting them.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-1
* Class NumGen.
*/

 /**
  * Function finds the min number in an array.
  */
function minFinder(NUM_ARRAY) {

  //Defines the base minimum number
  let currentMin = NUM_ARRAY[0];

  // calculates the min by comparing them with eachother
  for (let minCounter = 0; minCounter < 10; minCounter++) {
    if (NUM_ARRAY[minCounter] < currentMin) {
      currentMin = NUM_ARRAY[minCounter];
    }
  }
  return currentMin;
}

/**
 * Function finds the max number in an array.
 */
function maxFinder(NUM_ARRAY) {
  
  //Defines the base maximum number
  let currentMax = NUM_ARRAY[0];
  
  // calculates the max by comparing them with eachother
  for (let maxCounter = 0; maxCounter < 10; maxCounter++) {
    if (NUM_ARRAY[maxCounter] > currentMax) {
      currentMax = NUM_ARRAY[maxCounter];
    }
  }
  return currentMax;
}

/**
 * Creates the array of random numbers and prints them as well as the 
 * generated random numbers.
 */

// defines array of random numbers
const NUM_ARRAY = [];

// generates random numbers and places them in the array
for (let counter = 0; counter < 10; counter++) {
  NUM_ARRAY[counter] = Math.floor(Math.random() * ((99 - 1)) + 1) + 1;
  console.log(NUM_ARRAY[counter]);
}

// Calls maxNum function and minNum function to find max and min values
const foundMin = minFinder(NUM_ARRAY);
const foundMax = maxFinder(NUM_ARRAY);

// Outputing the max and min numbers.
console.log("Max number: " + foundMax);
console.log("Min number: " + foundMin);
