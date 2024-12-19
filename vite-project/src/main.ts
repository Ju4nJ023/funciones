import "./style.css";

const display = document.getElementById("display") as HTMLElement;
const previousBtn = document.getElementById("previous") as HTMLButtonElement;
const resetBtn = document.getElementById("reset") as HTMLButtonElement;
const nextBtn = document.getElementById("next") as HTMLButtonElement;
const markTurnBtn = document.getElementById("markTurn") as HTMLButtonElement;
const inputTurn = document.getElementById("inputTurn") as HTMLInputElement;
const setTurnBtn = document.getElementById("setTurn") as HTMLButtonElement;

let turnoActual = 0;

// Función para actualizar el display
function actualizarDisplay(): void {
  display.textContent = turnoActual.toString().padStart(2, "0");
}

// Manejadores de eventos
nextBtn.addEventListener("click", () => {
  turnoActual++;
  actualizarDisplay();
});

previousBtn.addEventListener("click", () => {
  if (turnoActual > 1) {
    turnoActual--;
    actualizarDisplay();
  }
});

resetBtn.addEventListener("click", () => {
  turnoActual = 0;
  actualizarDisplay();
});

markTurnBtn.addEventListener("click", () => {
  alert(`Su turno es el "${turnoActual.toString().padStart(2, "0")}" pase por el mostrador`);
});

setTurnBtn.addEventListener("click", () => {
  const nuevoTurno = parseInt(inputTurn.value, 10);
  if (!isNaN(nuevoTurno) && nuevoTurno >= 1) {
    turnoActual = nuevoTurno;
    actualizarDisplay();
  } else {
    alert("Por favor, introduce un número válido mayor o igual a 1.");
  }
});

// Inicializar el display al cargar la página
actualizarDisplay();

