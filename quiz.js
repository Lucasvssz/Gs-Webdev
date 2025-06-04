// Seletores
const question = document.querySelector(".question");
const answer = document.querySelector(".resposta");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".card");
const contentFinish = document.querySelector(".finalizar");
const btnRestart = document.querySelector(".finalizar .btn"); // Corrigido: espaço para selecionar o botão dentro da classe "finalizar"

import questions from "./question.js";

let currentIndex = 0;
let questionCorrect = 0;

// Função de reiniciar o quiz
btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";
    currentIndex = 0;
    questionCorrect = 0;
    loadQuestion();
};

// Próxima pergunta
function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionCorrect++;
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        Finish();
    }
}

// Finalização do quiz
function Finish() {
    textFinish.innerHTML = `Você acertou ${questionCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

// Carregar a pergunta atual
function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1} / ${questions.length}`;

    const item = questions[currentIndex];

    answer.innerHTML = "";
    question.innerHTML = item.question;

    // Criar as respostas dinamicamente
    item.answer.forEach((ans) => {
        const div = document.createElement("div");

        div.innerHTML = `
<button class="answer" data-correct="${ans.correct}">
                ${ans.Option}
</button>
        `;

        answer.appendChild(div);
    });

    // Adicionar o evento de clique para cada resposta
    document.querySelectorAll(".answer").forEach((btn) => {
        btn.addEventListener("click", nextQuestion);
    });
}

// Iniciar o quiz
loadQuestion();