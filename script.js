document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);

      let hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

      // new color to background
      document.body.style.backgroundColor = hex;

      // Update the text with color info
      document.getElementById("color-info").textContent = `Hex: ${hex} | RGB: (${r}, ${g}, ${b})`;
  }
});