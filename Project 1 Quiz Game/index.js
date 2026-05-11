//1. You should create an array named questions.

const questions = [
  {
    category:"science",
    question: "Who invented the telephone?",
    choices: ["Graham Bell", "Nicola Tesla", "Thomas Jefferson"],
    answer: "Graham Bell",
  },
  {
    category: "movies",
    question: "What is the best movie of all time?",
    choices: ["Inglorious Basterds", "Apocalypto", "Django Unchained"],
    answer: "Inglorious Basterds",
  },
  {
    category: "sports",
    question:"Who is the GOAT in football?",
    choices: ["Lionel Messi", "Cristiano Ronaldo", "Diego Maradona"],
    answer: "Lionel Messi",
  },
  {
    category:"history",
    question: "Who was the first european explorer to reach Rwanda?",
    choices: ["Adolf Von Gotzen", "Hanning Speke", "Richard Kandt"],
    answer: "Adolf Von Gotzen",
  },
  {
    category: "animals",
    question: "What is the biggest animal on earth?",
    choices: ["Blue whale", "Giraffe", "African Elephant"],
    answer: "Blue whale",
  },
];

function getRandomQuestion (arrOfQuestions) {

  return arrOfQuestions[Math.floor(Math.random() * arrOfQuestions.length)];

}

const getRandomComputerChoice = (availableChoices) => {

  return availableChoices[Math.floor(Math.random() * availableChoices.length)];

}

const getResults = (questionObject, compChoice) => {

  if(compChoice === questionObject.answer ){

    return "The computer's choice is correct!";
  }

  else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`
  }

}