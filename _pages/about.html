---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
I am in my final year at Georgia Tech. I completed my undergrad from the Indian Institute of Technology IIT(BHU) in Varanasi majoring in Computer Science. I am working on vector databases and RAG pipelines to find out if there is money to be saved by running them smartly. I picked up the systems bug from my work at Cohesity and AI from my time at Adobe. Always open for a chat. 
Cheers!

<div id="chat-interface" style="margin-top: 20px;">
  <div style="margin-bottom: 10px;">
    <select id="question-select" onchange="sendQuestion()" style="padding: 10px; font-size: 16px; font-family: 'Courier New', Courier, monospace; border: 1px solid #ddd; border-radius: 5px; width: 100%; max-width: 600px;">
      <option value="" disabled selected>Anything you'd like to ask me? Don't hesitate</option>
    </select>
  </div>

  <div id="chat-window" style="background-color: #f1f1f1; color: #333; border-radius: 8px; padding: 20px; width: 100%; max-width: 600px; margin: 0; font-family: 'Courier New', Courier, monospace; font-size: 16px; line-height: 1.5; border: 1px solid #ddd; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
    <div id="chat-output"></div>
  </div>
</div>

<script>
  let qaData = [];
  let isTyping = false;

  // Fetch JSON data and populate questions
  fetch('{{ base_path }}/files/qaData.json')
    .then(response => response.json())
    .then(data => {
      qaData = data;
      populateQuestions();
    })
    .catch(error => console.error("Error loading JSON data:", error));

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
    const selectedQuestionIndex = questionSelect.selectedIndex - 1; // Adjust for placeholder
    if (selectedQuestionIndex >= 0 && !isTyping) {
      showAnswer(selectedQuestionIndex);
    }
  }

  function showAnswer(index) {
  if (isTyping) return; // Prevent multiple answers from displaying at once

  const answer = qaData[index].answer.replace(/\n/g, "<br>"); // Convert newlines to <br>
  const chatOutput = document.getElementById("chat-output");
  chatOutput.innerHTML = ""; // Clear previous output
  let idx = 0;
  isTyping = true;

  // Temporary variable to build the answer character by character
  let displayedAnswer = "";

  const typeInterval = setInterval(() => {
    if (idx < answer.length) {
      displayedAnswer += answer.charAt(idx);
      chatOutput.innerHTML = displayedAnswer; // Render the partial answer
      idx++;
    } else {
      clearInterval(typeInterval);
      isTyping = false;
    }
  }, 5); // Adjust typing speed by changing the interval (5 ms)
}

</script>
