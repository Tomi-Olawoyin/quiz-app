const quizData = [
  {
   question: 'How old is Florin?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c'
},{
   question: 'Who is the president of US?',
    a: 'Florin Pop',
    b: 'Donald Trump',
    c: 'Joe Biden',
    d: 'Barack Obama',
    correct: 'c'
},{
   question: 'What does HTML stand for?',
    a: 'HyperText Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Hyper Text Make Language',
    correct: 'a'
},{
   question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b'
}

]


const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a-text")
const b_text = document.getElementById("b-text")
const c_text = document.getElementById("c-text")
const d_text = document.getElementById("d-text")


let currentQuiz = 0
let score = 0

const submitBtn = document.getElementById("submit")



let loadQuiz = () => {
    deselectAnswers()
  let currentQuizData = quizData[currentQuiz]
  questionEl.innerHTML = currentQuizData.question
  
  a_text.innerHTML = currentQuizData.a
  b_text.innerHTML = currentQuizData.b
  c_text.innerHTML = currentQuizData.c
  d_text.innerHTML =currentQuizData.d
  
  
}

loadQuiz ()

let getSelected = () => {

  
  let answerEl = undefined
  answers.forEach((answer) => {
    if(answer.checked){
      answerEl = answer.id
   
   }
  })
  return answerEl
}

function deselectAnswers () {
  answers.forEach((answer) => {
   answer.checked = false
 })
}

submitBtn.addEventListener("click", () => {
 
  
   const answer = getSelected()
   const current =quizData[currentQuiz].correct
   if(answer) {
     if(answer === current){
       score++
     }
         currentQuiz++
      if(currentQuiz < quizData.length){
     loadQuiz ()
  }else{
    quiz.innerHTML =`<h2>You answered ${score}/${quizData.length} questions correctly</h2>`
  }
         
   }
    
})