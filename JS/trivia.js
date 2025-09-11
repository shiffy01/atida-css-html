document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    { question: "What is the largest breed of dog?", options: ["Chihuahua", "Great Dane", "Beagle", "Poodle"], answer: "Great Dane" },
    { question: "How many legs do cats have?", options: ["2", "4", "6", "8"], answer: "4" },
    { question: "What is a group of kittens called?", options: ["Clowder", "Litter", "Pack", "Flock"], answer: "Litter" },
    { question: "Which pet is known for its ability to mimic human speech?", options: ["Parrot", "Dog", "Cat", "Hamster"], answer: "Parrot" },
    { question: "What do rabbits eat?", options: ["Meat", "Carrots", "Fish", "Bread"], answer: "Carrots" }
  ];

  let score = 0;
  let answeredCount = 0; // ✅ track how many answered

  const quizDiv = document.getElementById("quiz");
  const scoreDiv = document.getElementById("score");

  if (!quizDiv) {
    console.error("Quiz div not found!");
    return;
  }

  questions.forEach((q, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "trivia-item";

    const qText = document.createElement("div");
    qText.className = "trivia-question";
    qText.textContent = `${index + 1}. ${q.question}`;
    itemDiv.appendChild(qText);

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "options";

    const feedback = document.createElement("div");
    feedback.className = "feedback";

    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.addEventListener("click", () => {
        if (!btn.disabled) {
          if (option === q.answer) {
            score += 20;
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
          } else {
            feedback.textContent = `Wrong! Correct answer: ${q.answer}`;
            feedback.style.color = "red";
          }
          Array.from(optionsDiv.children).forEach(b => b.disabled = true);
          scoreDiv.textContent = `Score: ${score} / 100`;

          answeredCount++;
          if (answeredCount === questions.length) {
            showScore(score);
          }
        }
      });
      optionsDiv.appendChild(btn);
    });

    itemDiv.appendChild(optionsDiv);
    itemDiv.appendChild(feedback);
    quizDiv.appendChild(itemDiv);
  });

  function showScore(score) {
    const scoreDiv = document.getElementById("score");
    scoreDiv.innerText = `Your score: ${score} / 100`;

    const refreshBtn = document.getElementById("refreshBtn");
    refreshBtn.style.display = "block";

    refreshBtn.addEventListener("click", () => {
      location.reload();
    });
  }
});
