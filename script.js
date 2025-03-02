
document.addEventListener('DOMContentLoaded', function () {
  const line = document.getElementById('line');

  if (!line) {
    console.error("The line element is not found!");
    return;
  }

  let angle = 0;

  function rotateLine() {
    angle += 2;
    line.style.transform = `rotate(${angle}deg)`;
  }

  // Set the interval for rotation
  setInterval(rotateLine, 20);
});
