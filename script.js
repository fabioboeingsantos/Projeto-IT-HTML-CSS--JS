const quantidadeVagas = document.querySelector("#quantidade-vagas");
const mensagem = document.querySelector("#mensagem");
const confirmacao = document.querySelector("#confirmacao");
const capacidadeTotal = document.querySelector("#capacidade-total");
const ocupacao = document.querySelector("#ocupacao");
const ultimaEntrada = document.querySelector("#ultima-entrada");
const botaoEntrada = document.querySelector("#botao-entrada");
const botaoDesfazer = document.querySelector("#botao-desfazer");
// POR QUE: esta lista representa uma tabela simples do banco de dados do estacionamento.
const bancoEstacionamento = [
  { id: 1, nome: "Estacionamento do Evento", vagasLivres: 127, totalVagas: 127 }
];

const estacionamento = bancoEstacionamento[0];
let entradasRegistradas = 0;

// POR QUE: guarda a última ação para permitir uma correção rápida sem formulário ou teclado.
let ultimaAcao = "Nenhuma entrada registrada neste turno";

function atualizarPainel() {
  // POR QUE: vagas livres são a informação principal para a decisão do atendente.
  quantidadeVagas.textContent = estacionamento.vagasLivres;
  capacidadeTotal.textContent = "de " + estacionamento.totalVagas + " vagas totais";
  // POR QUE: vagas ocupadas são calculadas a partir do total e evitam dados duplicados.
  ocupacao.textContent = (estacionamento.totalVagas - estacionamento.vagasLivres) + " ocupadas";
  ultimaEntrada.textContent = ultimaAcao;
  botaoEntrada.textContent = "REGISTRAR ENTRADA";
  mensagem.classList.remove("mensagem-atencao");
  mensagem.classList.remove("mensagem-erro");
  // POR QUE: evita que o atendente tente tocar em uma ação impossível.
  botaoEntrada.disabled = false;

  if (estacionamento.vagasLivres === 0) {
    mensagem.textContent = "ERRO: ESTACIONAMENTO LOTADO";
    mensagem.classList.add("mensagem-erro");
    botaoEntrada.textContent = "ENTRADA BLOQUEADA";
    botaoEntrada.disabled = true;
    return;
  }

  if (estacionamento.vagasLivres < 10) {
    mensagem.textContent = "ATENÇÃO: POUCAS VAGAS";
    mensagem.classList.add("mensagem-atencao");
    return;
  }

  mensagem.textContent = "ENTRADA LIBERADA";
}

function registrarEntrada() {
  // POR QUE: impede que o sistema registre um carro quando não há vaga disponível.
  if (estacionamento.vagasLivres === 0) {
    confirmacao.textContent = "ENTRADA NÃO REGISTRADA";
    atualizarPainel();
    return;
  }

  estacionamento.vagasLivres = estacionamento.vagasLivres - 1;
  entradasRegistradas = entradasRegistradas + 1;
  ultimaAcao = "Última entrada registrada agora";
  confirmacao.textContent = "ENTRADA CONFIRMADA";
  atualizarPainel();
}

function desfazerEntrada() {
  // POR QUE: só permite desfazer ações feitas nesta sessão, evitando ultrapassar a capacidade inicial.
  if (entradasRegistradas === 0) {
    confirmacao.textContent = "NENHUMA ENTRADA PARA DESFAZER";
    return;
  }

  estacionamento.vagasLivres = estacionamento.vagasLivres + 1;
  entradasRegistradas = entradasRegistradas - 1;
  ultimaAcao = "Última entrada desfeita agora";
  confirmacao.textContent = "ENTRADA DESFEITA";
  atualizarPainel();
}

botaoEntrada.addEventListener("click", registrarEntrada);
botaoDesfazer.addEventListener("click", desfazerEntrada);

// POR QUE: garante que o painel comece sincronizado com os dados do estacionamento.
atualizarPainel();
