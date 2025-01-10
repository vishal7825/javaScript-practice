const name = "Vishal";

const repoCount = 6 

console.log(`Hello my name is ${name} my repocount is ${repoCount}`)

const gameName = new String("Vishal");

console.log(gameName.charAt(0));
console.log(gameName.indexOf('s'));

const newString =  gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    Vishal    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://vishal.com/vishal%20bavaliya"

console.log(url.replace('%20', '-'));

console.log(url.includes('vishal'));

console.log(gameName.split('-'));

