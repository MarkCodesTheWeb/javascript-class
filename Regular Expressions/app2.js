let re;
re = /hello/;
re = /hello/i;

//Metacharacter Symbols

re = /^h/i; //Must start with
re = /world$/i;  //Must end with
re= /^hello$/i;  //must start and end with
re = /h.llo/i; //Matches any One character
re = /h*llo/i; //Matches any character 0 or more times
re = /gre?a?y/i; //? means the character before it is optional
re = /gre?a?y\?/i; // Escape characters


//Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/;  // Must be a G or F
re = /[^GF]ray/i // Match anything except for G or F
re = /[A-Z]ray/; //Any uppercase letter matches
re = /[a-z]ray/; //Any lowercase letter matches
re = /[A-Za-z]ray/; //Any letter matches
re = /[0-9]ray/; //Matches any number

//Braces {} - Quantifiers
re = /Hel{2}o/i; //Must occur exactly (m) amount of times
re = /Hel{2,4}o/i; //Must occur exactly (m) times
re = /Hel{2,}o/i; //Must occur at least (m) times

//Parentheses () - Grouping
re = /^([0-9]x){3}$/

//Shorthand Character Classes
re = /\w/; // Word Character - alphanumeric charachter or _
re = /\w+/; // Plus = one or more
re = /\W/; //Non-word Characters
re = /\d/; //Match any digit first time
re = /\d+/; //Match any digit 0 or more times
re = /\D/; //Match non-digit
re = /\s/; //Match whitespace
re = /\S/; //Match any non-whitespace character
re = /\Hell\b/i; //Word Boundary


//Assertions
re = /x(?=y)/; //Match x only if it's followed by y
re = /x(?!y)/; //Match only if it's not followed by y
//String to match

const str = 'x';


//Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);