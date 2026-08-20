const quantidadeVagas = document.querySelector("#quantidade-vagas");
const mensagem = document.querySelector("#mensagem");
const confirmacao = document.querySelector("#confirmacao");
const botaoEntrada = document.querySelector("#botao-entrada");
const botaoDesfazer = document.querySelector("#botao-desfazer");
// POR QUE: esta lista representa uma tabela simples do banco de dados do estacionamento.
const bancoEstacionamento = [
  { id: 1, nome: "Estacionamento do Evento", vagasLivres: 127, totalVagas: 127 }
];

const estacionamento = bancoEstacionamento[0];
let entradasRegistradas = 0;

function atualizarPainel() {
  quantidadeVagas.textContent = estacionamento.vagasLivres + "/" + estacionamento.totalVagas;
  botaoEntrada.textContent = "REGISTRAR ENTRADA";
  mensagem.classList.remove("mensagem-atencao");
  mensagem.classList.remove("mensagem-erro");

  if (estacionamento.vagasLivres === 0) {
    mensagem.textContent = "ERRO: ESTACIONAMENTO LOTADO";
    mensagem.classList.add("mensagem-erro");
    botaoEntrada.textContent = "ENTRADA BLOQUEADA";
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
  if (estacionamento.vagasLivres === 0) {
    confirmacao.textContent = "ENTRADA NÃO REGISTRADA";
    atualizarPainel();
    return;
  }

  estacionamento.vagasLivres = estacionamento.vagasLivres - 1;
  entradasRegistradas = entradasRegistradas + 1;
  confirmacao.textContent = "ENTRADA CONFIRMADA";
  atualizarPainel();
}

function desfazerEntrada() {
  if (entradasRegistradas === 0) {
    confirmacao.textContent = "NENHUMA ENTRADA PARA DESFAZER";
    return;
  }

  estacionamento.vagasLivres = estacionamento.vagasLivres + 1;
  entradasRegistradas = entradasRegistradas - 1;
  confirmacao.textContent = "ENTRADA DESFEITA";
  atualizarPainel();
}

botaoEntrada.addEventListener("click", registrarEntrada);
botaoDesfazer.addEventListener("click", desfazerEntrada);
