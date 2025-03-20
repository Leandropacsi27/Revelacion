// Duración del contador en segundos
const countdownDuration = 40;

// Género a revelar: "azul" o "rosa"
const gender = "azul";

// Colores personalizados en hexadecimal
const colors = {
  azul: "#aed6f1 ", // Azul (puedes cambiarlo)
  rosa: "#d7bde2", // Rosa (puedes cambiarlo)
};

const countdownElement = document.createElement("div");
countdownElement.id = "countdown";
document.body.appendChild(countdownElement);

function startCountdown(duration) {
  let timeLeft = duration;

  const timer = setInterval(() => {
    countdownElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      revealGender();
    }

    timeLeft--;
  }, 1000);
}

function revealGender() {
  document.body.style.backgroundColor = colors[gender];
  countdownElement.textContent = "¡Sorpresa es niño!";
}

// Inicia la cuenta regresiva
startCountdown(countdownDuration);
