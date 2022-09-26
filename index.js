// to run: node index.js

/*
let myVariable = "hello world";
const other = 100;
let isReal = true;
let person = {
    name: "John",
    age: 25
};
person.name = "Luck";
let something = [123,"red", true];

function myfunction(name) {
    console.log("hello " + name);

}
myfunction(123);
*/

//number = prompt("what is your number ?")
// alert("helloworld");
// document.write("hello world");

/*
if('first string'==='another string'){
    console.log("they are the same strings")
}
else {
    console.log("they are not the same strings")
}

*/
let myElement = document.createElement('p');
let myText = document.createTextNode('my text');
let myClass = document.createAttribute('class');
myClass.value = 'someclass';
myElement.appendChild(myText);
myElement.setAttributeNode(myClass);
document.body.appendChild(myElement);