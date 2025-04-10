let popupMode = false;

document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let total = 0;
  for (let i = 1; i <= 10; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) total += parseFloat(selected.value);
  }
  localStorage.setItem("quizScore", total);
  document.getElementById("score").textContent = total;
  document.getElementById("quiz-form").style.display = "none";
  document.getElementById("result").style.display = "block";
});

function retakeQuiz() {
  const prevScore = parseFloat(localStorage.getItem("quizScore")) || 0;

  // popup only happens when score is over 50
  popupMode = prevScore > 50;

  document.getElementById("result").style.display = "none";
  document.getElementById("quiz-form").reset();
  document.getElementById("quiz-form").style.display = "block";

  // Remove existing listeners
  const radios = document.querySelectorAll("input[type='radio']");
  radios.forEach((radio) => {
    let newRadio = radio.cloneNode(true);
    radio.parentNode.replaceChild(newRadio, radio);
  });

  if (popupMode) {
    const radios = document.querySelectorAll("input[type='radio']");
    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (parseFloat(radio.value) >= 5) {
          alert("I don't think so?");
        }
      });
    });
  }
}
