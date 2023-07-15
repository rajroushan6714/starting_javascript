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