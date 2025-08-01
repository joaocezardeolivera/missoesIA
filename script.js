const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Você tá na rua e vê um robozão que sabe tudo! O bicho responde qualquer pergunta e até cria imagens maneiras. O que você acha disso?",
    alternativas: [
      {
        texto: "Isso é um pouco estranho, né?",
        afirmacao: "Ficou com a sensação de que o futuro tá chegando rápido demais e isso gera uma certa insegurança."
      },
      {
        texto: "Incrível! Quero saber como ele funciona!",
        afirmacao: "Ficou empolgado e logo pensou em como essa tecnologia poderia mudar sua rotina de estudos e até o trabalho."
      }
    ]
  },
  {
    enunciado: "A professora te desafia a fazer uma pesquisa sobre como a Inteligência Artificial pode ajudar na educação. Qual a sua abordagem?",
    alternativas: [
      {
        texto: "Eu uso uma IA pra coletar dados e organizar tudo de forma que eu entenda facilmente.",
        afirmacao: "Você usou a IA como uma ferramenta poderosa, acelerando o processo de pesquisa e ainda facilitando o entendimento."
      },
      {
        texto: "Eu mesmo pesquiso, entrevisto a galera, e monto o trabalho com o que eu aprendi até agora.",
        afirmacao: "Optou por seguir a sua própria experiência e usar as informações mais próximas de você, sem depender 100% da tecnologia."
      }
    ]
  },
  {
    enunciado: "Durante uma discussão na aula, a professora pergunta como você vê o impacto da IA nas profissões do futuro. Qual é a sua opinião?",
    alternativas: [
      {
        texto: "A IA vai criar empregos que nem imaginamos ainda e pode ajudar a gente a ser mais criativo.",
        afirmacao: "Você acredita que, apesar dos desafios, a IA pode ser uma aliada para expandir oportunidades e abrir novas portas profissionais."
      },
      {
        texto: "A IA pode tomar o lugar de muitas pessoas, então precisamos garantir que ninguém fique pra trás.",
        afirmacao: "Sua preocupação com a possível perda de empregos fez você pensar em soluções que envolvam uma adaptação ética à IA."
      }
    ]
  },
  {
    enunciado: "Agora, a professora pede pra você criar uma arte digital sobre como a IA pode mudar o mundo. Como você faz isso?",
    alternativas: [
      {
        texto: "Uso um software de design e crio minha arte do zero.",
        afirmacao: "Você escolheu usar a sua própria habilidade criativa e focou em ferramentas de design para expressar suas ideias."
      },
      {
        texto: "Deixo a IA criar uma imagem pra mim, é muito mais rápido e fica bem profissional.",
        afirmacao: "Você optou por usar a tecnologia a seu favor, criando algo único e interessante com a ajuda da IA."
      }
    ]
  },
  {
    enunciado: "Você e seus amigos têm um projeto de biologia pra entregar. Um deles pediu ajuda pro chat de IA e a resposta está idêntica a de um outro grupo. O que fazer?",
    alternativas: [
      {
        texto: "Não tem problema, o chat só ajudou a acelerar o trabalho, então está tudo certo.",
        afirmacao: "Você acabou se acostumando a depender da IA para fazer as tarefas mais rápido, sem perceber que a originalidade é importante."
      },
      {
        texto: "O chat pode ser útil, mas a gente precisa revisar e personalizar o trabalho, senão não é nosso.",
        afirmacao: "Você percebeu que a IA é uma ferramenta, mas que o trabalho precisa refletir a contribuição de cada um, com sua visão pessoal."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();