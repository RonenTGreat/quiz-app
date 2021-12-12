const quizData = [
  {
    question:
      "What is the name of the biggest technology company in South Korea?",
    a: "Xiaomi",
    b: "Infinix",
    c: "Samsung",
    d: "Apple",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of Ghana?",
    a: "Ofori Atta",
    b: "Nana Addo",
    c: "Donald Trump",
    d: "John Mahama",
    correct: "b",
  },
  {
    question: "What is does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "JavaScript Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
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
