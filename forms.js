const form = document.getElementById('form')
const nomeUsuario = document.getElementById('nomeUsuario')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const confirmarSenha = document.getElementById('confirmar-senha')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputNomeUsuario();

    checkInputEmail();

    checkInputSenha();

    checkInputConfirmarSenha();
})

function checkInputNomeUsuario(){
    const nomeUsuarioValue = nomeUsuario.value;

    console.log(nomeUsuarioValue);

    if(nomeUsuarioValue === ""){
        errorInput(nomeUsuario, "O nome de usuário é obrigatório");
    }
    else{
        const formItem = nomeUsuario.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    console.log(emailValue);

    if(emailValue === ""){
        errorInput(email, "O email é obrigatório");
    }
    else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputSenha(){
    const senhaValue = senha.value;

    console.log(senhaValue);

    if(senhaValue === ""){
        errorInput(senha, "A senha é obrigatório");
    }
    else if(senhaValue.length < 8){
        errorInput(senha, "A senha deve ter no mínimo 8 caracteres");
    }
    else{
        const formItem = senha.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputConfirmarSenha(){
    const senhaValue = senha.value;
    const confirmarSenhaValue = confirmarSenha.value;

    console.log(senhaValue);

    if(confirmarSenhaValue === ""){
        errorInput(confirmarSenha, "A confirmação de senha é obrigatória");
    }
    else if(confirmarSenhaValue !== senhaValue){
        errorInput(confirmarSenha, "As senhas devem ser iguais");
    }
    else if(senhaValue.length < 8){
        errorInput(confirmarSenha, "A senha deve ter no mínimo 8 caracteres");
    }
    else{
        const formItem = confirmarSenha.parentElement;
        formItem.className = "form-content"
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a") 

    textMessage.innerText = message;

    formItem.className = "form-content error";
}