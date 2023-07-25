const textBox = document.querySelector("#textbox");
const output = document.querySelector("#output");
// instead of defining a separate function, we can pass an anonymous function in 'addEventListener()'.
// and passed the event as it's argument.
textBox.addEventListener("keydown", function (event) {output.textContent = `You pressed "${event.key}".`;});
// you could even pass arrow function instead of anonymous function. Replace "function (event)" to "(event) =>"

function temp() {
    const originals = [1, 2 , 3];
    const doubled = originals.map(item => item * 2);
    console.log(doubled);
}
temp();
