document
  .getElementById("quiz-form")
  .addEventListener("submit", function (submit) {
    submit.preventDefault();
    let total = 0;
    //detect the checked radios
    for (let i = 1; i <= 10; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected) total += parseFloat(selected.value);
    }

    // store the score in localStorage
    localStorage.setItem("quizScore", total);

    //show the total score
    document.getElementById("score").textContent = total;
    document.getElementById("quiz-form").style.display = "none";
    document.getElementById("result").style.display = "block";

    // const retakeButton = document.querySelector("#result button");
    // if (total < 50) {
    //   retakeButton.onclick = () => href = "quiz4.html"; // Reload same page
    // } else {
    //   retakeButton.onclick = () => (window.location.href = "quiz2.html"); // Go to quiz2
    // }
  });
