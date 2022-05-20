let re;
re = /hello/;
re = /hello/i; //i equals case insensitive
// re = /hello/g; //g is for Global Search

// console.log(re);
// console.log(re.source);

// //exe() - Return results in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// //test() = Returns true or false if there's a match
// const result = re.test('Hello');
// console.log(result);

//match() - returns result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

//search() - return index of the first match if not found returns -1
// const str = "test Hello There";
// const result = str.search(re);
// console.log(result);

//replace() - returns a new string with some or all matches of a pattern
const str = "Hello There";
const newStr = str.replace(re, 'Hi');
console.log(newStr);