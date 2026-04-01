function calculateResults() {
  const answers = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  };

  const form = document.getElementById("quizForm");
  const formData = new FormData(form);

  for (let value of formData.values()) {
    answers[value]++;
  }

  const maxScore = Math.max(...Object.values(answers));
  const careers = [];
  for (let [career, score] of Object.entries(answers)) {
    if (score === maxScore) {
      careers.push(career);
    }
  }

  let resultText;
  if (careers.length > 1) {
    resultText = `It's a tie between: ${careers
      .map((career) => getCareerName(career))
      .join(", ")}`;
  } else {
    resultText = `You are suited for a career as a ${getCareerName(
      careers[0]
    )}.`;
  }

  const resultElement = document.getElementById("result");
  resultElement.textContent = resultText;
}

function getCareerName(letter) {
  switch (letter) {
    case "A":
      return "Data Scientist";
    case "B":
      return "Data Analyst";
    case "C":
      return "Data Engineer";
    case "D":
      return "Machine Learning Engineer";
    case "E":
      return "Business Intelligence Analyst";
    default:
      return "";
  }
}
