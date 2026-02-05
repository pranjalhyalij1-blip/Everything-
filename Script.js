const music = document.getElementById("bgMusic");

function startLove() {
  music.play();
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goHome() {
  showPage("home");
}
