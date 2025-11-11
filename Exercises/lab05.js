
// Make the Donate button interactive
const donateButton = document.querySelector("button");
donateButton.addEventListener("click", () => {
  const amount = document.querySelector("input").value;
  if (amount) {
    alert(`Thank you for donating $${amount}!`);
  } else {
    alert("Please enter a donation amount first!");
  }})
