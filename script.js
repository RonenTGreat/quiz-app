const quizData = [
  {
    question: "What is the most common colour of toilet paper in France?",
    a: "Seablue",
    b: "White",
    c: "Pink",
    d: "#191919",
    correct: "c",
  },
  {
    question:
      "If you dug a hole through the centre of the earth starting from Wellington in New Zealand, which European country would you end up in?",
    a: "Spain",
    b: "United Kingdom",
    c: "France",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "Henry VIII introduced which tax in England in 1535?",
    a: "Right tax",
    b: "Beard tax",
    c: "Trump tax",
    d: "Ox tax",
    correct: "b",
  },
  {
    question:
      "What is the correct term for a question mark immediately followed by an exclamation mark?",
    a: "Interrobang",
    b: "Instance",
    c: "Upstock",
    d: "Turning",
    correct: "a",
  },
  {
    question: "The average person does what thirteen times a day?",
    a: "Cry",
    b: "Laughs",
    c: "Piss",
    d: "Smile",
    correct: "b",
  },
];

const answerElements = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerHTML = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  
  answerElements.forEach((answerElement) => {
    answerElement.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions</h2>
      <button onclick="location.reload()">Try Again</button>`
    }
  }
});
