
// passing or coping by value in primitive data type
let a = 7;

let b = a;

b = 5;

console.log(a);
console.log(b);

// passing or coping by value in object

let c = { x : 8}

let d = c;

console.log(c);
console.log(d);

d.x = 9;

console.log('After being Updated');

console.log(c);
console.log(d);


function example1(prime){
    console.log('before changing the value');
    console.log('before')
    console.log(prime);

    prime = 10;
    console.log('after');
    console.log(prime);

}

let value = 9;
example1(value);

console.log('after changing the origin value')

console.log(value);




