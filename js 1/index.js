// // template literals give a more readable code.
// let name = "John";
// alert(`Hello ${name}`);
// alert(`the result of 1 + 2 is ${1 + 2}`);
// alert("the result of 1 + 2 is ${1 + 2}");
// let result = 5 > 4;
// console.log(result);
// alert('abcdz' > 'abcea');
// console.log(5 > 4);
// console.log("apple" > "pineapple");
// console.log("2" > "12");
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(null == "0");
// console.log(null == "\0");


let text;
switch(new Date().getDay()){
    case 0:
        text = "Today is Sunday";
        break;
    case 6:
        text = "Today is Saturday";
        break;
    default:
        text = "Looking forward to weekend";
}
document.getElementById("Demo").innerHTML = text;

const button = document.querySelector("button");
button.addEventListener("click" , greet);
function greet(){
    // the value of name will be the value you put in into the prompt that appers on click.
    const name = prompt("What is your name?");
    alert(`Hello ${name} , nice to see you!.`);
}
// in every arithmetic operator except "+", js will try to convert the string into the number first,
// where as in case of + -> it goes for concationation.
let x = "10";
let y = "20";
let z = x + y;
console.log(z);

// Number function
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

// including expression in strings
const song = "Fight the youth";
const score = 9;
const Maxscore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / Maxscore) * 100}% .`;
console.log(output);

// multiline string
// we can achieve the same with line break (\n) in the string.
const multilinestring = `I like the song.
I gave it a score of 90%.`;
console.log(multilinestring);