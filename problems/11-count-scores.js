/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/
// input: array of objects
// output: return object with key as person who scared and value = sum of their scores;
function countScores(people) {
  let obj = {};
  // if obj doesn't have name alrdy;
    // make a name key in object;
      // unique names should be anthony fred and winnie;
  // obj key should have the total score as value;
    // maybe make key start at 0?
      // and iterate through peeps to add score ?
  for (let i = 0; i < people.length; i++) {
    let scoreBoardArr = (Object.entries(people[i])); // make people[i] (which is an object) into an array of key-value pair;
    let name = scoreBoardArr[0][1]; // declare name variable and assign it scoreBoardArr[0][1] (which are names)

    if (obj[name] === undefined) { // to check if name is already a key in obj
      obj[name] = 0; // to create a key-value pair in obj if name isn't in obj yet
    }
    obj[name] += scoreBoardArr[1][1] // add scoreBoardArr[1][1] (which are scores) to corresponding name in obj;


  }
  return obj;
}

let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
