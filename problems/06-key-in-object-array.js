/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of
objects as the first parameter and a string as the second. The `keyInObjectArray`
will return `true` if any of the objects contains the `keyString` as a key within them, and
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/
// input:
  // objArray = array of objects;
  // keyString = key that may or may not be array;
// function checks if keyString is a key belonging to one of the objects;


function keyInObjectArray(objArray, keyString) {

  for (let i = 0; i < objArray.length; i++) {
    let entries = Object.keys(objArray[i]);

    for (let j = 0; j < entries.length; j++) {
      let key = entries[j];
      if (key === keyString) {
        return true;
      }
    }
  }
  return false;
}

let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

console.log(keyInObjectArray(objArray, 'planet')); // => true
keyInObjectArray(objArray, 'age'); // => true
console.log(keyInObjectArray(objArray, 'food')); // => false
keyInObjectArray(objArray, 'animal'); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
