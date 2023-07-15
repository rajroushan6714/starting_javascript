// js string methods.

// string length
let Text = "alkdlsjfdlksaj";
let length = Text.length;
console.log(length);

//extraction string parts "slice(start, end), substring(start, end) , substr(start, length)"
//slice -> extract a part of string and return the extract part.
// takes two parameter: start position and end position (end is not included).
// if we omit the second parameter it will 
let text = "Apple, Banana, Kiwi";
document.getElementById("demo0").innerHTML = text;

let part = text.slice(7, 13);
document.getElementById("demo").innerHTML = part;
console.log(text);

//substring() -> it is similar to slice.
let str = "Apple, Banana, Kiwi";
let substr1 = str.substring(7, 13);
document.getElementById("demo2").innerHTML = substr1;

//substr it is also similar to slice, but here the second parameter is the length of the substring.
let substr2 = str.substr(0, 5);
document.getElementById("demo3").innerHTML = substr2;

//replace
const button1 = document.querySelector("#replace_button");
button1.addEventListener("click", act1);
function act1() {
    let text = document.getElementById("demo4").innerHTML;
    document.getElementById("demo4").innerHTML = text.replace("Apple", "Mango");
}

//toUpperCase // toLowerCase

//concat method, plud method can also be used as js concat string if '+' sign is given.
const button2 = document.querySelector("#concat_button");
button2.addEventListener("click", act2);
function act2(){
    let text1 = document.getElementById("demo5").innerHTML;
    let text2 = "Mango";
    let text3 = text1.concat(", ", text2);
    document.getElementById("demo5").innerHTML = text3;
}


// trim()-> remove white space from both end of the string.
// trimStart()-> remove white spaces at the start of string.
// trimEnd()-> remove white spaces at the end of the string.

// padding=> padStart(), padEnd() doesn't work on number, convert no into string.
// Both work in similar ways.
let padstring = "5";
document.getElementById("demo6").innerHTML = padstring.padStart(4, "0");

// extracting characters of a string. It has 3 methods.
// charAt(i)-> return the character present at ith position in the string.
// charCodeAt(i)-> return the code of the character present at ith position in the string.
// propertyAccess => []-> allows property access on strings.

// strings can be converted into arrays.
// split()-> it is used to convert string into array.
const button3 = document.querySelector("#array_button");
button3.addEventListener("click", act3);
function act3(){
    let text = document.getElementById("demo7").innerHTML;
    const myArray = text.split(", ");
    document.getElementById("demo7").innerHTML = myArray[1];
}