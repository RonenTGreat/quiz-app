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
    correct: "d",
  },
];

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
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerHTML = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  const answers = document.querySelectorAll(".answer");

  let answer = undefined;

  answers.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {

      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        alert("You have completed the quiz.");
      }

  }


  
});
