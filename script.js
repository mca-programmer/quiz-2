const quizData = [
  {
    question: "HTML এর পূর্ণরূপ কী?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "CSS কী কাজে ব্যবহৃত হয়?",
    options: ["ওয়েবপেজ ডিজাইন", "ডেটা সঞ্চয়", "অ্যাপ রান করা"],
    answer: "ওয়েবপেজ ডিজাইন"
  },
  {
    question: "JavaScript হল একটি...",
    options: ["প্রোগ্রামিং ভাষা", "স্টাইলিং ভাষা", "মার্কআপ ভাষা"],
    answer: "প্রোগ্রামিং ভাষা"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const data = quizData[currentQuestion];
  questionEl.textContent = data.question;
  optionsEl.innerHTML = "";

  data.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(btn, option);
    optionsEl.appendChild(btn);
  });

  resultEl.textContent = "";
}

function checkAnswer(button, selectedOption) {
  const correctAnswer = quizData[currentQuestion].answer;
  const buttons = optionsEl.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    } else if (btn.textContent === selectedOption) {
      btn.classList.add("wrong");
    }
  });

  if (selectedOption === correctAnswer) {
    score++;
    resultEl.textContent = "✔️ সঠিক উত্তর!";
  } else {
    resultEl.textContent = "❌ ভুল উত্তর!";
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  questionEl.textContent = "🎉 কুইজ শেষ!";
  optionsEl.innerHTML = "";
  resultEl.innerHTML = `আপনার স্কোর: <strong>${score} / ${quizData.length}</strong>`;
  nextBtn.style.display = "none";
}

// প্রথম প্রশ্ন লোড করা
loadQuestion();
