# 🧠 Quiz de Perguntas

Quiz de múltipla escolha desenvolvido em JavaScript puro, consumindo uma API externa de perguntas em tempo real. Projeto prático de fixação de lógica de programação e consumo de API, dentro dos estudos da trilha Full-Stack da Rocketseat.

## ✨ Funcionalidades

- 🌐 **Perguntas dinâmicas via API** — 10 perguntas de múltipla escolha buscadas em tempo real a cada partida, sem repetição garantida por token de sessão
- 🔀 **Alternativas embaralhadas** — as 4 opções de resposta aparecem em ordem aleatória a cada pergunta
- ✅ **Feedback visual imediato** — a alternativa escolhida é destacada em verde (acerto) ou vermelho (erro), revelando também a resposta correta quando o jogador erra
- ▶️ **Avanço automático** — o quiz avança para a próxima pergunta automaticamente após responder
- 📊 **Barra de progresso** — indicador visual de quantas perguntas já foram respondidas
- 🏆 **Tela de resultado** — pontuação final, porcentagem de acerto e mensagem que muda conforme o desempenho
- 🔄 **Jogar novamente** — busca um novo conjunto de perguntas da API para uma nova rodada
- 📱 **Responsivo** — adaptado para celular, tablet e desktop

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica da página
- **CSS3** — gradientes, texturas com `radial-gradient` repetido, `box-shadow`, `transition`, media queries para responsividade
- **JavaScript (Vanilla)** — lógica do quiz, consumo de API com `fetch`/`async`/`await`, sem uso de frameworks
- **[Tryvia API](https://github.com/peterfritz/tryvia-api)** — API pública de perguntas de trivia, compatível com o formato da Open Trivia Database, com perguntas traduzidas para português
- **Google Fonts** — tipografia customizada (Nunito e Baloo 2)

## 🚀 Como executar o projeto

Não é necessário nenhuma instalação — é um projeto 100% front-end estático.

1. Clone o repositório:
   ```bash
   git clone https://github.com/MickaelMarquesdev/quiz.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd quiz
   ```
3. Abra o arquivo `index.html` diretamente no navegador, ou utilize uma extensão como o **Live Server** (VS Code).

> ⚠️ **Nota:** este projeto depende de uma API pública de terceiros (Tryvia API), mantida por um desenvolvedor independente e não vinculada à Rocketseat. Em caso de instabilidade ou indisponibilidade dessa API, as perguntas podem não carregar.

## 📁 Estrutura do projeto

```
quiz/
├── index.html      # Estrutura da página (quiz e tela de resultado)
├── style.css        # Estilização (visual, animações, responsividade)
└── script.js        # Lógica do quiz (consumo de API, perguntas, pontuação)
```

## 🧠 Principais conceitos aplicados

- Consumo de API com `fetch`, `async`/`await`
- Requisições encadeadas (token de sessão antes de buscar as perguntas)
- Decodificação de entidades HTML retornadas pela API
- Manipulação de arrays: `spread operator`, `sort` para embaralhamento, `forEach`
- Geração dinâmica de elementos (`createElement`, `appendChild`)
- Controle de estado da aplicação (pergunta atual, pontuação)
- `setTimeout` para transições temporizadas entre perguntas
- Media queries para responsividade em múltiplos tamanhos de tela

## 📌 Sobre o projeto

Este projeto foi desenvolvido para fins de estudo e prática de consumo de API e lógica de programação em JavaScript, como parte de um ciclo de projetos práticos complementares à formação Full-Stack da [Rocketseat](https://www.rocketseat.com.br/).

---

Feito com 🧠 por Mickael Marques
