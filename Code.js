const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
    resetState()
     showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1 ) {


nextButton.classList.remove('hide')
 } else {
     startButton.innerText = 'Restart'
     startButton.classList.remove('hide')   
 }
}
function  setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
//var img = document.createElement("img");
   // img.src = "usa-flag.webp";

   //var div = document.getElementById("flag");
    //div.appendChild(img); 
    



const questions = [
    {
        question:  'What flag is this?',
        answers: [
            { text: 'United States of America', correct: true },
            { text: 'Sweden', correct: false },
            { text: 'finland', correct: false}
            
        

        
        ]
    },
    {


          question: 'What flag is this' ,
          answers: [
           { text: 'Turkey', correct: true },
           { text: 'Greece', correct: false}


        ]
   
    },
    {

        question: 'What flag is this: ',
        answers: [
            { text: 'England', correct: false},
            { text: 'Romania', correct: true}


        ]

    },
    {


        question: 'What flag is this' ,
        answers: [
         { text: 'Poland', correct: false },
         { text: 'Canada', correct: false},
         { text: 'Italy',  correct: true },
         { text: 'France', correct: false}


      ]
 
  },
    
]