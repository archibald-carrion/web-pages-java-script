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
/*
let myElement = document.createElement('p');
let myText = document.createTextNode('my text');
let myClass = document.createAttribute('class');
myClass.value = 'someclass';
myElement.appendChild(myText);
myElement.setAttributeNode(myClass);
document.body.appendChild(myElement);
*/

let bouton0 = document.querySelector('#myButton0');
let bouton1 = document.querySelector('#myButton1');

// function addParagraph(myText) {
//     let myElement = document.createElement('p');
//     let myText = document.createTextNode(myText);
//     let myClass = document.createAttribute('class');
//     myClass.value = 'someclass';
//     myElement.appendChild(myText);
//     myElement.setAttributeNode(myClass);
//     document.body.appendChild(myElement);
// }
ReactDOM.render(<h1> </h1>, document.querySelector('#root'))

bouton0.addEventListener('click', function addParagraph() {
    let myElement = document.createElement('p');
    let myText = document.createTextNode('hello');
    let myClass = document.createAttribute('class');
    myClass.value = 'someclass';
    myElement.appendChild(myText);
    myElement.setAttributeNode(myClass);
    document.body.appendChild(myElement);
}, false);

bouton1.addEventListener('click', function addParagraph() {
    let myElement = document.createElement('p');
    let myText = document.createTextNode('hola');
    let myClass = document.createAttribute('class');
    myClass.value = 'someclass';
    myElement.appendChild(myText);
    myElement.setAttributeNode(myClass);
    document.body.appendChild(myElement);
}, false);

// function chooseText(){


// }

// bouton0.addEventListiner('click', chooseText);
// bouton1.addEventListener('click', chooseText);
// bouton.addEventListener('click', addParagraph);
// if(bouton0)
// bouton0.onclick = addParagraph('hello');
// bouton1.onclick = addParagraph('goodbye');
// bouton.onclick = changeText;

list.appendChild(document.createElement('li'));
list.children.item(2).textContent = 'Element 2';