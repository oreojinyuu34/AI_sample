var themes = [
  { bg: "#f1f3ce", text: "#000000", textBg: "rgba(95, 95, 81, 0.5)" },
  { bg: "#b7b8b6", text: "#b7fa74", textBg: "rgba(72, 72, 71, 0.5)" },
  { bg: "#2a3132", text: "#ffffff", textBg: "rgba(16, 19, 20, 0.5)" },
  { bg: "#208000", text: "#eb711a", textBg: "rgba(32, 128, 0, 0.5)" },
  { bg: "#4cb5f5", text: "#ffffff", textBg: "rgba(30, 71, 96, 0.5)" },
  { bg: "#f98866", text: "#66f988", textBg: "rgba(98, 53, 40, 0.5)" },
  { bg: "#f5e356", text: "#5668f5", textBg: "rgba(96, 89, 34, 0.5)" },
  { bg: "#f52549", text: "#FFFFFF", textBg: "rgba(96, 15, 29, 0.5)" },
];

function changeTheme(index) {
  var theme = themes[index];
  document.body.style.backgroundColor = theme.bg;
  document.querySelector(".catch-copy").style.color = theme.text;
  document.querySelector(".catch-copy").style.backgroundColor = theme.textBg;
  document.querySelector(".lead-text").style.color = theme.text;
  document.querySelector(".lead-text").style.backgroundColor = theme.textBg;
}

// Set the initial theme.
changeTheme(0);

window.onload = function () {
  const image = document.querySelector(".fade-in");
  image.classList.add("fade-in-on-load");
};
