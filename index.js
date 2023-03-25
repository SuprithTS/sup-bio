console.log('Hello World');

let person = {
    name: 'mosh',
    age: 30
};

person.name = 'john'
//console.log(person);
person['name'] = 'livi';
//console.log(person.name);

let col = ['red','yellow', 9];
col[3] = 2;
//console.count(col.length);


function greet(name, LAST) 
{
    console.log( name + LAST + ' will learn java script' );
} 
greet('Suprith', ' Bharadwaj');

function square(n){
    return n*n;
}
console.log('square 'square(12));