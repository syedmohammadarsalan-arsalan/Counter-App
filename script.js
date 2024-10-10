decrement = () => {
  // Get the current value from the DOM, parse it to an integer
  let val = parseInt(document.querySelector("#counter").textContent);
  val--; // Decrement the value
  document.querySelector("#counter").textContent = val; // Update the displayed value
}

Increment = () => {
  // Get the current value from the DOM, parse it to an integer
  let val = parseInt(document.querySelector("#counter").textContent);
  val++; // Increment the value
  document.querySelector("#counter").textContent = val; // Update the displayed value
}
