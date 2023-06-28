const questions = [
  {
    que: "Which of the following is a markup language?",
    a: "Html",
    b: "Css",
    c: "JavaScript",
    d: "Php",
    correct: "a",
  },
  {
    que: "What year was javascript launch?",
    a: "1996",
    b: "1995",
    c: "1997",
    d: "1998",
    correct: "b",
  },
  {
    que: " What is the correct syntax of doctype in HTML5?",
    a: "</doctype html>",
    b: "<doctype html>",
    c: "<doctype html!>",
    d: "<!doctype html>",
    correct: "d",
  },
  {
    que: "What Was Css stand?",
    a: "Markup Language",
    b: "Cascanding style sheet",
    c: "JSON",
    d: "Programming language",
    correct: "b",
  },
  
  {
    que: "Which of the following tag is used for inserting the largest heading in HTML?",
    a: "head",
    b: "<h1>",
    c: "<h6>",
    d: "heading",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".option");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};
const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <div style="text-align:center;">
    <h3>Thank you for submit quiz</h3>
    <h2 style="margin-top:10px;"> ${right} &#128526; / ${total} are correct</h2>
    </div>
    `;
};
loadQuestion();
