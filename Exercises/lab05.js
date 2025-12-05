// Make the Donate button interactive
const donateButton = document.querySelector("button");
donateButton.addEventListener("click", () => {
  const amount = document.querySelector("input").value;

  if (amount) {
    alert(`Thank you for donating $${amount}!`);
    launchConfetti(); // 🎉 trigger confetti
  } else {
    alert("Please enter a donation amount first!");
  }
});

// ---------------------
// 🎉 Conefetti function
// ---------------------
function launchConfetti() {
  const container = document.getElementById("confetti-container");

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Random color
    confetti.style.backgroundColor =
      `hsl(${Math.random() * 360}, 100%, 50%)`;

    // Start position (bottom-center like a cone)
    confetti.style.left = window.innerWidth / 2 + "px";
    confetti.style.top = window.innerHeight - 50 + "px";

    // Random trajectory
    const angle = (Math.random() * 60 - 30) * (Math.PI / 180); // -30° to +30°
    const velocity = Math.random() * 150 + 150;

    const xVelocity = Math.cos(angle) * velocity;
    const yVelocity = -Math.sin(angle) * velocity;

    // Apply animation using transform movement
    confetti.animate(
      [
        { transform: `translate(0, 0)` },
        { transform: `translate(${xVelocity}px, ${yVelocity}px)` }
      ],
      {
        duration: 1200,
        easing: "ease-out"
      }
    );

    container.appendChild(confetti);

    // Remove after animation
    setTimeout(() => confetti.remove(), 1300);
  }
}

