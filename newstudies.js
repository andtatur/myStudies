let person = {
    name: 'Jane';
    age: 37;
    valasprieki: ['skiing', 'photo'];
}

// can also be in one single line

// OBJECT named "person" has 3 KEY-VALUED pairs: a STRING, a NUMBER and an ARRAY of strings

person.name = 'Mary';
person['age'] = 73;
// 2 ways of accessing a specific value in an object

//lets add some more values
person.height = '5ft';
person['gender']= 'female';

//we need to delete one
delete person.gender;
delete person ['age'];

/*

!!!
The primitive types are STRINGS, NUMBERS, BOOLEANS, NULL, and UNDEFINED, bigints(?), and symbols (?).

*/

let object = {a:1; b:2; c:3};
object.c = object.c+1;

for(let prop in person){
    console.log(person[prop]);
}
//zachem eto?

let obj1 = {a:1, b:2};
let obj2 = object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2){
    console.log(obj2.[prop]);
}

//Object.keys
let personKeys = Object.keys(person);
console.log(personKeys);
personKeys.forEach(key => {
    console.log(person[key])
});