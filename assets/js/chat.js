let isTyping = false;

const qaData = [
  { "question": "What do you like to do for fun?", "answer": "This might look like an AI generated answer, but I love sports, books and music. I am a big Manchester United fan! I attended the FIFA World Cup in Qatar in 2023. It was an amazing experience!\n My favourite artist is Steven Wilson and the Porcupine Tree. A recent favourite artist is Yebba. Sally Rooney and Sue Grafton are my favourite authors." },
  { "question": "What do you like to work on? What are your interests?", "answer": "I started out with research in AI, more specifically Computer Vision. I interned at Adobe Research and worked on One Shot Image Segmentation. I also worked on Image Generation in my undergrad.\n Post my undergrad, I joined Cohesity, which is scale out block storage implemented in C++. My experience at Cohesity drew me towards low level programming and building distributed protocols from scratch.\n I am currently at Georgia Tech and I enjoy working towards optimizng vector databases and building systems for AI." },
  { "question": "What are you currently working on?", "answer": "I've been working on optimizing memory usage in vector databases. My idea is that if horizontal scaling of memory is the reason why distributed vector databases exist, then disaggregated memory solutions could be a possible answer. You can look for more details in my projects section." }
];

function populateQuestions() {
  const questionSelect = document.getElementById("question-select");
  qaData.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = item.question;
    questionSelect.appendChild(option);
  });
}

function sendQuestion() {
  const questionSelect = document.getElementById("question-select");
  const selectedQuestionIndex = questionSelect.selectedIndex - 1;
  if (selectedQuestionIndex >= 0 && !isTyping) {
    showAnswer(selectedQuestionIndex);
  }
}

function showAnswer(index) {
  if (isTyping) return;

  const answer = qaData[index].answer.replace(/\n/g, "<br>");
  const chatOutput = document.getElementById("chat-output");
  chatOutput.innerHTML = "";
  let idx = 0;
  isTyping = true;

  let displayedAnswer = "";

  const typeInterval = setInterval(() => {
    if (idx < answer.length) {
      displayedAnswer += answer.charAt(idx);
      chatOutput.innerHTML = displayedAnswer;
      idx++;
    } else {
      clearInterval(typeInterval);
      isTyping = false;
    }
  }, 5);
}

document.addEventListener("DOMContentLoaded", populateQuestions);
