function toggleMenu() {
  const menu = document.getElementsByClassName("menu-links");
  const icon = document.getElementsByClassName("hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function calculateScore() {
 //novelle fonctionnalité sur es6 Spread syntax (...)
  const questions = [...document.getElementsByClassName('question')];

  let score = 0;

  questions.forEach((question, index) => {
      const inputs = document.getElementsByName(`q${index + 1}`);
      console.log( inputs);
const selected = Array.from(inputs).find(input => input.checked);

      if (selected && selected.value === "1") {
          score++;
      }
  });

  const result = document.getElementById('result');
  result.innerHTML = `<p>Votre score est : ${score}/${questions.length}</p>`;
  result.innerHTML += `<p>Merci d'avoir participé au quiz !</p>`;
}
function openPopup(id) {
  document.getElementById(id).style.display = "block";
}

// Fermer le popup
function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

// Fermer le popup en cliquant à l'extérieur
window.onclick = function(event) {
  const popups = [...document.getElementsByClassName('popup')];
  popups.forEach(popup => {
      if (event.target === popup) {
          popup.style.display = "none";
      }
  });
};
