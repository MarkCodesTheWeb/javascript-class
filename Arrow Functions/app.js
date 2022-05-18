// const sayHello = function() {
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

//One line function does not need braces
// const sayHello = () => console.log('Hello');

//one line returns
// const sayHello = () => 'Hello';

//return object
// const sayHello = () => ({msg: 'Hello'});

//Single parameter does not need parentheses
// const sayHello = name => console.log(`Hello ${name}`); 

//multiple parameters need parentheses
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`)
// sayHello('Fred', 'Jones');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//     return name.length;
// });

//shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// });

//shortest

const nameLengths = users.map(name => name.length);

console.log(nameLengths);