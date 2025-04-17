window.addEventListener("DOMContentLoaded", () => {
  const prevScore = parseFloat(localStorage.getItem("quizScore")) || 0;

  // Add alert on high-score choices
  if (prevScore >= 50) {
    const radios = document.querySelectorAll("input[type='radio']");
    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (parseFloat(radio.value) >= 5) {
          alert("I don't think so?");
        }
      });
    });
  }

  // Handle form submission
  const form = document.getElementById("quiz-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent URL redirect

    let total = 0;
    for (let i = 1; i <= 10; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected) total += parseFloat(selected.value);
    }

    localStorage.setItem("quizScore", total);
    document.getElementById("score").textContent = total;
    form.style.display = "none";
    document.getElementById("result").style.display = "block";
  });
});
