let colors = ["#FFB6C1", "#98FB98", "#ADD8E6", "#FFD700", "#FF6347"];
let currentColorIndex = 0;

document.getElementById("colorButton").addEventListener("click", function() {
  document.body.style.backgroundColor = colors[currentColorIndex];
  
  currentColorIndex++;
  if (currentColorIndex >= colors.length) {
    currentColorIndex = 0;
  }
});
