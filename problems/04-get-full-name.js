/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/
// input = object
// output = full name
  // object has a firstname and lastname key
  //do somethnig to return first two key;
function getFullName(person) {
  let fullName = ""

  return fullName += person["firstName"] + " " + person["lastName"];
}

let p1 = {firstName: 'John', lastName: 'Doe'};
console.log(getFullName(p1)); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
console.log(getFullName(p2)); // => 'Charlie Brown'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
