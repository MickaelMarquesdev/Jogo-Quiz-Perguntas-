let perguntas = []
let perguntaAtual = 0
let pontuacao = 0

async function buscarToken() {
    const resposta = await fetch("https://tryvia.ptr.red/api_token.php?command=request")
    const dados = await resposta.json()
    return dados.token
}

async function buscarPerguntas() {
    const token = await buscarToken()
    const resposta = await fetch(`https://tryvia.ptr.red/api.php?amount=10&token=${token}`)
    const dados = await resposta.json()
    return dados.results
}

function decodificarTexto(texto) {
    const elemento = document.createElement("textarea")
    elemento.innerHTML = texto
    return elemento.value
}

function embaralhar(array) {
    return array.sort(function() {
        return Math.random() - 0.5
    })
}

function exibirPergunta() {
    const pergunta = perguntas[perguntaAtual]

    document.querySelector(".progresso").textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`

    const porcentagemProgresso = (perguntaAtual / perguntas.length) * 100;
    document.querySelector('.barra-progresso-preenchida').style.width = `${porcentagemProgresso}%`;

    document.querySelector(".pergunta").textContent = decodificarTexto(pergunta.question)

    const todasAlternativas = [...pergunta.incorrect_answers, pergunta.correct_answer]
    const alternativasEmbaralhadas = embaralhar(todasAlternativas)

    const alternativasEl = document.querySelector(".alternativas")
    alternativasEl.innerHTML = ""

    alternativasEmbaralhadas.forEach(function(alternativa) {
        const botao = document.createElement("button")
        botao.textContent = decodificarTexto(alternativa)
        botao.classList.add("alternativa")

        botao.addEventListener("click", function() {
            responderPergunta(alternativa, botao)
        })

        alternativasEl.appendChild(botao)
    })
}

function responderPergunta(alternativaEscolhida, botaoClicado) {
    const pergunta = perguntas[perguntaAtual]
    const botoes = document.querySelectorAll(".alternativa")

    botoes.forEach(function(botao) {
        botao.disabled = true
    })

    if (alternativaEscolhida === pergunta.correct_answer) {
        pontuacao++
        botaoClicado.classList.add("correta")
    } else {
        botaoClicado.classList.add("errada")
    
        botoes.forEach(function(botao) {
            if(botao.textContent === decodificarTexto(pergunta.correct_answer)) {
                botao.classList.add("correta")
            }
        })
    }

    setTimeout(function() {
        perguntaAtual++

        if(perguntaAtual < perguntas.length) {
            exibirPergunta()
        } else {
            exibirResultado()
        }
    }, 1500)
}

function exibirResultado() {

    document.querySelector('.quiz').style.display = 'none';
    document.querySelector('.resultado').style.display = 'block';

    const porcentagem = Math.round((pontuacao / perguntas.length) * 100);

    let mensagem;
    if (porcentagem >= 80) {
        mensagem = "Mandou muito bem! 🏆";
    } else if (porcentagem >= 50) {
        mensagem = "Bom trabalho! 👏";
    } else {
        mensagem = "Continue tentando! 💪";
    }

    document.querySelector('.pontuacao-final').textContent = `${pontuacao} de ${perguntas.length} (${porcentagem}%)`;
    document.querySelector('.mensagem-resultado').textContent = mensagem;
}

async function reiniciarQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;

    document.querySelector('.resultado').style.display = 'none';
    document.querySelector('.quiz').style.display = 'block';

    perguntas = await buscarPerguntas();
    exibirPergunta();
}

document.querySelector('.btn-jogar-novamente').addEventListener('click', reiniciarQuiz);


async function iniciarQuiz() {
    perguntas = await buscarPerguntas()
    exibirPergunta()
}

iniciarQuiz()

console.log(perguntas)