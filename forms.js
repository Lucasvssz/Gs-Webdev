const form = document.getElementById('form')
const nomeUsuario = document.getElementById('nomeUsuario')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const confirmarSenha = document.getElementById('confirmar-senha')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputNomeUsuario();
})

function checkInputNomeUsuario(){
    const nomeUsuarioValue = nomeUsuario.value;

    console.log(nomeUsuarioValue);

    if(nomeUsuarioValue === ""){
        errorInput(nomeUsuario, "O nome de usuário é obrigatório");
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.queryselecetor("a") 

    textMessage.innerText = message;

    formItem.className = "form-content error";
}