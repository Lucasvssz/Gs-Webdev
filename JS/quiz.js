const $startGameButton = document.querySelector(".start-quiz")
const $questionContainer = document.querySelector(".container-questions-quiz")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")

$startGameButton.addEventListener("click", starGame )
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalCorrect = 0

function starGame(){
    $startGameButton.classList.add("hide")
    $questionContainer.classList.remove("hide")
    displayNextQuestion()
}




function displayNextQuestion(){
 resetState()

  document.querySelector(".container-quiz").classList.remove("correct", "incorrect")

    if(questions.length === currentQuestionIndex){
        return finishGame()
    }
    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.Text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)

    })
}

function resetState(){
        while($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

     $nextQuestionButton.classList.add("hide")

}


function selectAnswer(event) {
  const answerClicked  = event.target
//Adicionar fundo verde ao container-quiz

if(answerClicked.dataset.correct){
    document.querySelector(".container-quiz").classList.add("correct")
    totalCorrect++ 
} else {
    document.querySelector(".container-quiz").classList.add("incorrect")
}
    document.querySelectorAll(".answer").forEach(button => {
        if(button.dataset.correct){
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }

        button.disabled = true
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++

}

function finishGame(){
    const totalQuestions = questions.length
    const performace = Math.floor(totalCorrect * 100 / totalQuestions)

    let message = ""

    switch(true){
        case(performace >= 90):
            message = "Execelente :)"
            break
        case (performace >= 70):
            message = "Muito bom :)"
            break 
        case (performace >= 50):
            message = "Bom :)"
            break 
        default:
            message = "Pode melhorar :("
    }

    $questionContainer.innerHTML = 
    `
    <p class = "final-message">
    Você acertou ${totalCorrect} de ${totalQuestions} questões!
    <span>Resultado: ${message}</span>
    </p>
    <button onclick = window.location.reload() class = "button">
    Refazer teste
    </button>

    `


}


const questions = [
    {
        question: "1. Qual é o principal objetivo do sistema HidroFlow?",
        answers: [
            { Text: "Melhorar o trânsito", correct: false },
            { Text: "Prevenir alagamentos urbanos", correct: true },
            { Text: "Reduzir o consumo de energia", correct: false },
            { Text: "Aumentar o turismo", correct: false },
        ]
    },
        {
        question: "2. Quais tecnologias são utilizadas no projeto HidroFlow?",
        answers: [
            { Text: "sensores de temperatura", correct: false },
            { Text: "Computadores de bordo automotivos", correct: false },
            { Text: "Satélites e drones", correct: false },
            { Text: "Arduino e sensores ultrassônicos", correct: true },
        ]
    },
    {
    question: "3. O que o sistema HidroFlow monitora em tempo real?",
    answers: [
        { Text: "Tráfego de veículos", correct: false },
        { Text: "Qualidade do ar", correct: false },
        { Text: "Nível de água e obstruções em bueiros", correct: true },
        { Text: "Consumo de energia", correct: false },
    ]
},
    {
    question: "4. Qual componente NÃO faz parte do sistema de alerta do HidroFlow?",
    answers: [
        { Text: "LEDs", correct: false },
        { Text: "Buzzer", correct: false },
        { Text: " Display LCD", correct: false },
        { Text: "Câmera de segurança", correct: true },
    ]
},
    {
    question: "5. Quem é o público-alvo do HidroFlow?",
    answers: [
        { Text: "Comunidades vulneráveis a enchentes", correct: true },
        { Text: "Empresas de tecnologia", correct: false },
        { Text: "Escolas particulares", correct: false },
        { Text: "Lojas de eletrônicos", correct: false },
    ]
},
    {
    question: "6. Qual benefício o sistema HidroFlow proporciona? ",
    answers: [
        { Text: "Reduz danos materiais", correct: true },
        { Text: "Aumenta o preço da água", correct: false },
        { Text: "Melhora a conexão Wi-Fi", correct: false },
        { Text: "Facilita o transporte público", correct: false },
    ]
},
    {
    question: "7. O que impede o escoamento adequado nos bueiros, segundo o texto? ",
    answers: [
        { Text: "Falta de energia", correct: false },
        { Text: "Falta de chuva", correct: false },
        { Text: "Acúmulo de água, lixo e obstruções", correct: true },
        { Text: "Animais silvestres", correct: false },
    ]
},
    {
    question: "8. Além de segurança, o que mais o HidroFlow oferece?",
    answers: [
        { Text: "Entretenimento", correct: false },
        { Text: "Mobilidade e infraestrutura", correct: true },
        { Text: "Serviços bancários", correct: false },
        { Text: "Cursos online", correct: false },
    ]
},
    {
    question: "9. Como os usuários podem se beneficiar do sistema?  ",
    answers: [
        { Text: "Recebendo informações em tempo real sobre riscos", correct: true },
        { Text: "Ganhando descontos em lojas", correct: false },
        { Text: "Participando de sorteios", correct: false },
        { Text: "Recebendo aulas de natação", correct: false },
    ]
},
    {
    question: "10. Qual é o propósito futuro do HidroFlow?",
    answers: [
        { Text: "Exportar para outros países", correct: false },
        { Text: "Integrar com o sistema de emergência brasileiro", correct: true },
        { Text: "Criar um aplicativo de jogos", correct: false },
        { Text: " Vender equipamentos para escolas", correct: false },
    ]
},
];
