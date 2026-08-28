const quantidadeVagas = document.querySelector("#quantidade-vagas");
const mensagem = document.querySelector("#mensagem");
const confirmacao = document.querySelector("#confirmacao");
const capacidadeTotal = document.querySelector("#capacidade-total");
const ocupacao = document.querySelector("#ocupacao");
const ultimaEntrada = document.querySelector("#ultima-entrada");
const botaoEntrada = document.querySelector("#botao-entrada");
const botaoDesfazer = document.querySelector("#botao-desfazer");
const botaoSaida = document.querySelector("#botao-saida");
let estacionamento;
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
  mensagem.classList.remove("mensagem-laranja");
  mensagem.classList.remove("mensagem-erro");
  mensagem.classList.remove("mensagem-carregando");
  mensagem.classList.remove("mensagem-sucesso");
  // POR QUE: evita que o atendente tente tocar em uma ação impossível.
  botaoEntrada.disabled = false;
  botaoDesfazer.disabled = false;
  botaoSaida.disabled = false;

  if (estacionamento.vagasLivres <= 0) {
    estacionamento.vagasLivres = 0;
    mensagem.textContent = "ERRO: ESTACIONAMENTO LOTADO";
    mensagem.classList.add("mensagem-erro");
    botaoEntrada.textContent = "ENTRADA BLOQUEADA";
    botaoEntrada.disabled = true;
    return;
  }

  if (estacionamento.vagasLivres <= 10) {
    mensagem.textContent = "ATENÇÃO: POUCAS VAGAS";
    mensagem.classList.add("mensagem-erro");
    return;
  }

  if (estacionamento.vagasLivres <= estacionamento.totalVagas / 2) {
    mensagem.textContent = "ATENÇÃO: POUCAS VAGAS";
    mensagem.classList.add("mensagem-laranja");
    return;
  }

  mensagem.textContent = "ENTRADA LIBERADA";
}

function registrarEntrada() {
  // POR QUE: impede que o sistema registre um carro quando não há vaga disponível.
  if (estacionamento.vagasLivres <= 0) {
    confirmacao.textContent = "ENTRADA NÃO REGISTRADA";
    atualizarPainel();
    return;
  }

  estacionamento.vagasLivres = Math.max(0, estacionamento.vagasLivres - 1);
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

  estacionamento.vagasLivres = Math.min(estacionamento.totalVagas, estacionamento.vagasLivres + 1);
  entradasRegistradas = entradasRegistradas - 1;
  ultimaAcao = "Última entrada desfeita agora";
  confirmacao.textContent = "ENTRADA DESFEITA";
  atualizarPainel();
}

function registrarSaida() {
  if (estacionamento.vagasLivres >= estacionamento.totalVagas) {
    estacionamento.vagasLivres = estacionamento.totalVagas;
    confirmacao.textContent = "NENHUM VEÍCULO PARA REGISTRAR SAÍDA";
    return;
  }

  estacionamento.vagasLivres = Math.min(estacionamento.totalVagas, estacionamento.vagasLivres + 1);
  ultimaAcao = "Última saída registrada agora";
  confirmacao.textContent = "SAÍDA REGISTRADA";
  atualizarPainel();
}

botaoEntrada.addEventListener("click", registrarEntrada);
botaoDesfazer.addEventListener("click", desfazerEntrada);
botaoSaida.addEventListener("click", registrarSaida);

async function carregarVagas() {
  const esperar = (tempo) => new Promise((resolver) => setTimeout(resolver, tempo));

  try {
    mensagem.textContent = "CARREGANDO DADOS...";
    mensagem.className = "mensagem mensagem-carregando";
    confirmacao.textContent = "Aguarde a leitura do arquivo vagas.json";
    await esperar(3000);

    if (window.location.protocol === "file:") {
      throw new Error("Abra o projeto usando um servidor local, como o Live Server.");
    }

    const resposta = await fetch("./vagas.json", { cache: "no-store" });

    if (!resposta.ok) {
      throw new Error("Não foi possível carregar o arquivo de vagas.");
    }

    const bancoEstacionamento = await resposta.json();

    if (!bancoEstacionamento || typeof bancoEstacionamento !== "object") {
      throw new Error("O arquivo vagas.json precisa conter um objeto de estacionamento.");
    }

    estacionamento = bancoEstacionamento;

    if (!Number.isFinite(estacionamento.vagasLivres) ||
        !Number.isFinite(estacionamento.totalVagas) ||
        estacionamento.totalVagas <= 0 ||
        estacionamento.vagasLivres < 0 ||
        estacionamento.vagasLivres > estacionamento.totalVagas) {
      throw new Error("Os valores de vagas no JSON são inválidos.");
    }

    mensagem.textContent = "DADOS CARREGADOS COM SUCESSO";
    mensagem.className = "mensagem mensagem-sucesso";
    confirmacao.textContent = "O estacionamento está pronto para uso";
    await esperar(3000);
    atualizarPainel();
  } catch (erro) {
    mensagem.textContent = "ERRO AO CARREGAR VAGAS: " + erro.message;
    mensagem.className = "mensagem mensagem-erro";
    confirmacao.textContent = "Verifique o arquivo vagas.json e tente novamente";
    botaoEntrada.disabled = true;
    botaoSaida.disabled = true;
    await esperar(3000);
    console.error(erro);
  }
}

botaoEntrada.disabled = true;
botaoSaida.disabled = true;
botaoDesfazer.disabled = true;
carregarVagas();
