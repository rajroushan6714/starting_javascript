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
const button = document.querySelector("button");
button.addEventListener("click", act);
function act() {
    let text = document.getElementById("demo4").innerHTML;
    document.getElementById("demo4").innerHTML = text.replace("Apple", "Mango");
}