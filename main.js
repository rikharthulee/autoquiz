const quizQuestions = [
  {
    question:
      "Which is the only country in the world to not have a non rectangualar flag?",
    correctAnswer: "Nepal",
  },

  {
    question: "What is the most abundant gas in our atmosphere?",
    correctAnswer: "Nitrogen",
  },

  {
    question: "When was the movie the Titanic released?",
    correctAnswer: "1997",
  },

  {
    question:
      "What is the name of the main antagonist in the Shakespeare play Othello?",
    correctAnswer: "Lago",
  },

  {
    question: "How many of Henry VIII's wives were called Catherine?",
    correctAnswer: 3,
  },

  {
    question: "What was the most popular girls name in the UK in 2021?",
    correctAnswer: "Olivia",
  },

  {
    question: "What is the capital of Finland?",
    correctAnswer: "Helsinki",
  },

  {
    question: "What is the currency of Denmark?",
    correctAnswer: "Krone",
  },

  {
    question: "What is the smallest planet in our solar system?",
    correctAnswer: "Mercury",
  },

  {
    question:
      "Street artist Banksy is originally associated with which British city?",
    correctAnswer: "Bristol",
  },
];

let currentQuestionIndex = 0;
let userScore = 0;

function askQuestion(index) {
  let userAnswer = prompt(quizQuestions[index].question); // This will display the question and wait for the user's answer
  if (
    userAnswer.toLocaleLowerCase() ===
    quizQuestions[index].correctAnswer.toLocaleLowerCase()
  ) {
    console.log("Correct!");
    userScore++;
  } else {
    console.log("Wrong!");
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    askQuestion(currentQuestionIndex);
  } else {
    // End of quiz
  }
}

// Start the quiz
askQuestion(currentQuestionIndex);
