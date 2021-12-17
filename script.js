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
  {
    question: "Coprastastaphobia is the fear of what",
    a: "Cops",
    b: "Constipation",
    c: "Constants",
    d: "Cats",
    correct: "b",
  },
  {
    question: "What were the first ice hockey pucks made out of?",
    a: "Frozen cow dung",
    b: "Bones",
    c: "Ice",
    d: "Wood",
    correct: "a",
  },
  {
    question: "It's illegal in Texas to put what on your neighbour’s Cow?",
    a: "Perfumes",
    b: "Oil",
    c: "Toilet paper",
    d: "Grafitti",
    correct: "d",
  },
  {
    question: "Which bird is nicknamed The Laughing Jackass?",
    a: "Kookaburra",
    b: "Parrot",
    c: "Cock",
    d: "Flamingo",
    correct: "a",
  },
  {
    question: "Who entered a contest to find his own look-alike and came 3rd?",
    a: "Chris Rock",
    b: "Jackie Chan",
    c: "Charlie Chaplin",
    d: "Mr.Bean",
    correct: "c",
  },
  {
    question: "French artist Aquabouse paints cows with what material?",
    a: "Cow dung",
    b: "Cow urine",
    c: "Cow blood",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      " In 1978 an Iowa judge dismissed a drink driving charge for what obscure reason?",
    a: "Forced smapling",
    b: "Too sleepy to sample",
    c: "Crying too much to sample",
    d: "Too drunk to sample",
    correct: "d",
  },
  {
    question:
      "In which country are there six villages called Silly, 12 called Billy, and two called Pratt?",
    a: "England",
    b: "France",
    c: "Germany",
    d: "South Africa",
    correct: "b",
  },
  {
    question:
      "Native to the Caribbean, what sort of animal is the mountain chicken?",
    a: "Pig",
    b: "Eagle",
    c: "Frog",
    d: "Ant",
    correct: "c",
  },
  {
    question:
      "The UK's Dyslexia Research Trust is based in which British city?",
    a: "Reading",
    b: "Liverpool",
    c: "London",
    d: "Manchester",
    correct: "a",
  },
  {
    question:
      "What nickname was given to Rembrandt's The Night Watch after being over-restored in the 1940s?",
    a: "The Midnight Show",
    b: "Moonly Watch",
    c: "The Day Watch",
    d: "None of them",
    correct: "c",
  },
  {
    question: "True or false: You can sneeze in your sleep",
    a: "False",
    b: "True",
    c: "Yeah right",
    d: "Comedy",
    correct: "a",
  },
  {
    question: "Which country has the most tornadoes by area?",
    a: "United States",
    b: "Japan",
    c: "India",
    d: "England",
    correct: "d",
  },
  {
    question: "Who invented the word vomit?",
    a: "Benjamin Franklin",
    b: "William Shakespeare",
    c: "Albert Einstein",
    d: "Luke Combs",
    correct: "b",
  },
  {
    question: "Which European country has 158 verses to its national anthem?",
    a: "Ukraine",
    b: "France",
    c: "Greece",
    d: "Italy",
    correct: "c",
  },
  {
    question:
      "The leader of which country has his face on all the joghurt pots, has named the month January after himself and banned ballet.",
    a: "Kim Jong-un",
    b: "Robert Mugabe",
    c: "Kevin Rudd",
    d: "Turkmenistan",
    correct: "d",
  },
  {
    question: "What is Scooby Doo’s full name?",
    a: "Dooby Doo",
    b: "Scooby Dooby",
    c: "Scoobert Doo",
    d: "None",
    correct: "c",
  },
  {
    question: "What is the collective noun for a group of unicorns?",
    a: "A blessing",
    b: "A herd",
    c: "A rainbow",
    d: "A rejoicing",
    correct: "a",
  },
  {
    question: "Where was the fortune cookie invented",
    a: "Accra",
    b: "London",
    c: "China Town",
    d: "San Francisco",
    correct: "d",
  },
  {
    question: "What is the cross between a donkey and a zebra known as?",
    a: "Zeedonk",
    b: "Donkey Hong",
    c: "Male",
    d: "Jackass",
    correct: "a",
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
      <button onclick="location.reload()">Try Again</button>`;
    }
  }
});
