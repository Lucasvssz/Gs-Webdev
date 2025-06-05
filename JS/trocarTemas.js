let temaAtual = localStorage.getItem('tema') || 'claro'

const btnClaro = document.getElementById('tema-claro')
const btnEscuro = document.getElementById('tema-escuro')
const btnAzul = document.getElementById('tema-azul')

const botoesTema = [btnClaro, btnEscuro, btnAzul]

function atualizarBotaoAtivo(tema) {
    botoesTema.forEach(btn => btn.classList.remove('ativo'))
    if (tema === 'claro') btnClaro.classList.add('ativo')
    else if (tema === 'escuro') btnEscuro.classList.add('ativo')
    else if (tema === 'azul') btnAzul.classList.add('ativo')
}

const habilitarModoClaro = () => {
    document.body.classList.add('modo-claro')
    document.body.classList.remove('modo-escuro', 'modo-azul')
    localStorage.setItem('tema', 'claro')
    atualizarBotaoAtivo('claro')
}

const habilitarModoEscuro = () => {
    document.body.classList.add('modo-escuro')
    document.body.classList.remove('modo-claro', 'modo-azul')
    localStorage.setItem('tema', 'escuro')
    atualizarBotaoAtivo('escuro')
}

const habilitarModoAzul = () => {
    document.body.classList.add('modo-azul')
    document.body.classList.remove('modo-claro', 'modo-escuro')
    localStorage.setItem('tema', 'azul')
    atualizarBotaoAtivo('azul')
}

if (temaAtual === 'claro') {
    habilitarModoClaro()
} else if (temaAtual === 'escuro') {
    habilitarModoEscuro()
} else {
    habilitarModoAzul()
}

btnClaro.addEventListener('click', habilitarModoClaro)
btnEscuro.addEventListener('click', habilitarModoEscuro)
btnAzul.addEventListener('click', habilitarModoAzul)
