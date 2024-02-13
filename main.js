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

let currentQuestionIndex = 0; // Variable to count users score
let userAnswers = []; // Empty array to store users answers

// Asks the first question
function askQuestion(index) {
  let userAnswer = prompt(quizQuestions[index].question); // creates a variable and and a popup with the first question from the array
  userAnswers.push(userAnswer); // adds the users answer to the userAnswers array
  nextQuestion(); // Calls next function
}

function nextQuestion() {
  currentQuestionIndex++; // add 1 to currentQ var
  if (currentQuestionIndex < quizQuestions.length) {
    askQuestion(currentQuestionIndex); // Go round again, as long as there are questions left
  } else {
    checkAnswers(); // check answers!
  }
}

// Start the quiz
askQuestion(currentQuestionIndex); // Sends the currentQ var to the askQuestion function

function checkAnswers() {
  for (let i = 0; i < quizQuestions.length; i++) {
    if (
      userAnswers[i].toLowerCase() ===
      quizQuestions[i].correctAnswer.toLowerCase()
    ) {
      console.log("Question " + (i + 1) + ": Correct!");
    } else {
      console.log(
        "Question " +
          (i + 1) +
          ": Incorrect. The correct answer was " +
          quizQuestions[i].correctAnswer
      );
    }
  }
}
