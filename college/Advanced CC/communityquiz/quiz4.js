window.addEventListener("DOMContentLoaded", () => {
  const highValueRadios = document.querySelectorAll(
    'input[value="5"], input[value="7.5"], input[value="10"]'
  );

  //when radios with higher scores are clicked, it disappears
  highValueRadios.forEach((radio) => {
    radio.addEventListener("click", () => {
      const label = radio.closest("label");
      if (label) {
        label.style.display = "none";
      }
    });
  });

  const form = document.getElementById("quiz-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    //calculate score
    let total = 0;
    for (let i = 1; i <= 10; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected) {
        total += parseFloat(selected.value);
      }
    }

    //show the total score
    localStorage.setItem("quizScore", total);
    document.getElementById("score").textContent = total;
    form.style.display = "none";
    document.getElementById("result").style.display = "block";
  });
});
