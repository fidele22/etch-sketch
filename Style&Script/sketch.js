const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  console.log(userInput.value);
};

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("square", "color");
});

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function() {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});

createGrid();

function askGridSize() {
  const gridSize = prompt('Enter the number of squares per side (maximum 100):');
  const size = parseInt(gridSize);

  if (!isNaN(size) && size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert('Invalid input. Please enter a number between 1 and 100.');
  }
}

document.addEventListener('DOMContentLoaded', createGrid(16));

const button = document.createElement('button');
button.textContent = 'Change Grid Size';
button.addEventListener('click', askGridSize);
document.body.insertBefore(button, document.getElementById('container'));

function randomizeRGB() {
  return Math.floor(Math.random() * 256);
}
