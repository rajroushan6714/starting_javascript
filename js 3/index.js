const textBox = document.querySelector("#textbox");
const output = document.querySelector("#output");
// event listener calls "logKey" function and passed the event as it's argument.
textBox.addEventListener("keydown", logKey);
// logKey prints the event that occurred.
function logKey(event) {
    output.textContent = `You pressed "${event.key}".`;
  }
// instead of defining a separate function, we can pass an anonymous function in 'addEventListener()'.
