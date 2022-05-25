// SETS - Store unique values of any type

const set1 = new Set();

//Add values to set
set1.add(100);
set1. add('A string');
set1.add ({name: 'John'});
set1.add(true);

// const set2 = new Set ([1, true, 'string']);
// console.log(set2);

// console.log(set1);

//Get count
// console.log(set1.size);

//Check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({name: 'John'}));

// console.log('Hello'=== {name: "John"});

//Delete from set
// set1.delete(100);
// console.log(set1);

//Iterating through SETS

// //For of
// for(let item of set1.entries()) {
//   console.log(item);
// }


// //ForEach loop
// set1.forEach((value) => function() {
//   console.log(value);
// });

//Convert SET to ARRAY
const setArr = Array.from(set1);
console.log(setArr);