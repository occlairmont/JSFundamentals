/*
TERNARIES

5-expressionAndOperators
    03-ternaries.js
*/

let x = 6;

x > 0 ? console.log('x is positive'): console.log('x is negative');

if (x > 0){
    console.log('x is positive');
} else {
    console.log('x is negative');
}

let greeting = 'salutations!';

if (greeting.length > 10){
    console.log('that is a long greeting!');
} else if (greeting.length == 10){
    console.log('your greeing is exactly 10 characters!');
} else {
    console.log('What a normal greeting!');
}

greeting.length > 10 ? console.log('that is a long greeting!') : greeting.length == 10 ? console.log('your greeting is exacting 10 characters!') : console.log('What a normal greeting!');