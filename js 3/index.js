const textBox = document.querySelector("#textbox");
const output = document.querySelector("#output");
// instead of defining a separate function, we can pass an anonymous function in 'addEventListener()'.
// and passed the event as it's argument.
textBox.addEventListener("keydown", function (event) {output.textContent = `You pressed "${event.key}".`;});
