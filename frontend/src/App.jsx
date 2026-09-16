import { useEffect, useState } from "react";
import "../landing.css";
import "../estilo.css";

const API_BASE = "http://127.0.0.1:8000/api";

function Brand({ onHome }) {
  return (
    <a className="brand" href="#inicio" onClick={onHome} aria-label="Estacionamento do Evento - início">
      <span className="brand-mark" aria-hidden="true">E</span>
      <span>ESTACIONAMENTO<br /><strong>DO EVENTO</strong></span>
    </a>
  );
}

function Landing({ onPanel }) {
  return (
    <>
      <a className="skip-link" href="#inicio">Pular para o conteúdo principal</a>
      <header className="site-header">
        <Brand onHome={(event) => { event.preventDefault(); window.scrollTo(0, 0); }} />
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#como-funciona">Como funciona</a>
          <a href="#beneficios">Benefícios</a>
          <a className="nav-cta" href="#painel" onClick={onPanel}>Abrir painel <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero section-shell" aria-labelledby="titulo-principal">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> CONTROLE DE ENTRADA EM TEMPO REAL</p>
            <h1 id="titulo-principal">Menos fila.<br /><span>Mais controle.</span></h1>
            <p className="hero-text">Saiba em dois segundos se ainda há vaga e registre cada entrada com um toque.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#painel" onClick={onPanel}>Testar o painel <span aria-hidden="true">→</span></a>
              <a className="text-link" href="#como-funciona">Ver como funciona <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-proof"><span className="proof-line" aria-hidden="true" /><span>Feito para eventos em movimento</span></div>
          </div>
          <div className="hero-visual" role="img" aria-label="Prévia do painel com 50 vagas disponíveis e entrada liberada">
            <div className="glow glow-one" aria-hidden="true" /><div className="glow glow-two" aria-hidden="true" />
            <div className="dashboard-card">
              <div className="dashboard-topline"><span>ESTACIONAMENTO DO EVENTO</span><span className="live-label"><i aria-hidden="true" /> AO VIVO</span></div>
              <div className="dashboard-status">VAGAS DISPONÍVEIS</div><div className="dashboard-number">50</div>
              <div className="dashboard-total">de 50 vagas totais</div><div className="dashboard-occupied">0 ocupadas</div>
              <div className="dashboard-alert">ENTRADA LIBERADA</div><button className="dashboard-button" type="button">REGISTRAR ENTRADA</button>
              <div className="dashboard-meta"><span>Última atualização</span><strong>agora</strong></div>
            </div>
          </div>
        </section>

        <section className="metrics section-shell" aria-label="Resumo de benefícios"><div><strong>01</strong><span>olhar para a tela</span></div><div><strong>02</strong><span>entender o status</span></div><div><strong>03</strong><span>registrar com um toque</span></div><div className="metrics-note">Uma operação clara<br />do começo ao fim.</div></section>

        <section className="feature-section section-shell" id="beneficios" aria-labelledby="titulo-beneficios">
          <div className="section-heading"><p className="eyebrow">DESENHADO PARA O RITMO DO EVENTO</p><h2 id="titulo-beneficios">A informação certa,<br /><span>na hora certa.</span></h2></div>
          <div className="feature-grid">
            <article className="feature-card feature-card-highlight"><div className="feature-icon" aria-hidden="true">↗</div><h3>Decisão imediata</h3><p>O número de vagas e o status da entrada ficam em primeiro plano, sem menus ou tabelas para interpretar.</p></article>
            <article className="feature-card"><div className="feature-icon" aria-hidden="true">◎</div><h3>Um toque basta</h3><p>Botões grandes e áreas confortáveis para operar no celular ou tablet, mesmo com luvas.</p></article>
            <article className="feature-card"><div className="feature-icon" aria-hidden="true">↪</div><h3>Erro fácil de corrigir</h3><p>Registrou uma entrada por engano? Desfaça rapidamente sem reiniciar a tela ou preencher formulários.</p></article>
          </div>
        </section>

        <section className="flow-section section-shell" id="como-funciona" aria-labelledby="titulo-fluxo">
          <div className="flow-copy"><p className="eyebrow">COMO FUNCIONA</p><h2 id="titulo-fluxo">Do carro chegando<br />à entrada registrada.</h2><p>Uma interface operacional precisa acompanhar o ritmo de quem está na linha de frente. Por isso, cada decisão fica visível e cada ação deixa uma confirmação.</p><a className="text-link" href="#painel" onClick={onPanel}>Conhecer o painel <span aria-hidden="true">→</span></a></div>
          <ol className="flow-list"><li><span>01</span><div><strong>Bata o olho</strong><p>Veja quantas vagas estão livres.</p></div></li><li><span>02</span><div><strong>Confirme o status</strong><p>Saiba imediatamente se a entrada está liberada.</p></div></li><li><span>03</span><div><strong>Toque e avance</strong><p>Registre a entrada e siga para o próximo veículo.</p></div></li></ol>
        </section>

        <section className="faq-section section-shell" id="perguntas-frequentes" aria-labelledby="titulo-faq"><div className="section-heading"><p className="eyebrow">DÚVIDAS FREQUENTES</p><h2 id="titulo-faq">Tudo claro antes<br /><span>do primeiro carro.</span></h2></div><div className="faq-list"><details><summary>O que é o Estacionamento do Evento?</summary><p>É um painel web para acompanhar vagas e controlar a entrada e a saída de veículos durante eventos.</p></details><details><summary>Como registrar a entrada de um veículo?</summary><p>Abra o painel, confira o número de vagas disponíveis e toque em <strong>Registrar entrada</strong>.</p></details><details><summary>O painel funciona em celular e tablet?</summary><p>Sim. A interface foi desenhada para uso em celular, tablet e computador.</p></details></div></section>
        <section className="final-cta section-shell" aria-labelledby="titulo-cta"><p className="eyebrow">PRONTO PARA O PRÓXIMO CARRO?</p><h2 id="titulo-cta">Controle a entrada<br /><span>sem perder tempo.</span></h2><a className="button button-primary" href="#painel" onClick={onPanel}>Abrir o painel <span aria-hidden="true">→</span></a></section>
      </main>
      <footer className="site-footer section-shell"><span>ESTACIONAMENTO DO EVENTO</span><span>Controle de entrada simples e direto.</span></footer>
    </>
  );
}

function Panel({ onHome }) {
  const [parking, setParking] = useState(null);
  const [message, setMessage] = useState("CARREGANDO DADOS...");
  const [confirmation, setConfirmation] = useState("Conectando à API...");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const loadParking = async () => {
    try {
      const response = await fetch(`${API_BASE}/parking`, { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || "Não foi possível carregar as vagas.");
      setParking(data);
      setMessage("DADOS CARREGADOS COM SUCESSO");
      setConfirmation("O estacionamento está pronto para uso");
      setError(false);
    } catch (requestError) {
      setMessage(`ERRO AO CONECTAR À API: ${requestError.message}`);
      setConfirmation("Inicie o backend na porta 8000 e tente novamente");
      setError(true);
    }
  };

  useEffect(() => { loadParking(); }, []);

  const executeAction = async (action) => {
    setBusy(true);
    setConfirmation("SALVANDO...");
    try {
      const response = await fetch(`${API_BASE}/parking/${action}`, { method: "POST" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || "Não foi possível concluir a ação.");
      setParking(data.estacionamento);
      setMessage(getAvailabilityMessage(data.estacionamento));
      setConfirmation(data.mensagem.toUpperCase());
      setError(false);
    } catch (requestError) {
      setMessage(`ERRO NA API: ${requestError.message}`);
      setConfirmation("AÇÃO NÃO REGISTRADA");
      setError(true);
    } finally {
      setBusy(false);
    }
  };

  const availabilityMessage = parking ? getAvailabilityMessage(parking) : message;
  const messageClass = error ? "mensagem mensagem-erro" : `mensagem ${getMessageClass(parking)}`;

  return (
    <>
      <header className="cabecalho"><a className="marca" href="#inicio" onClick={onHome}>ESTACIONAMENTO DO EVENTO</a><p className="status-conexao"><span className="status-ponto" aria-hidden="true" /> CONTROLE DE ENTRADA</p></header>
      <main>
        <section className="painel-vagas" aria-labelledby="titulo-vagas"><p id="titulo-vagas" className="rotulo">VAGAS DISPONÍVEIS</p><p className="quantidade" aria-live="polite">{parking?.vagasLivres ?? "—"}</p><p className="disponiveis">{parking ? `de ${parking.totalVagas} vagas totais` : "de — vagas totais"}</p><p className="ocupacao">{parking ? `${parking.vagasOcupadas} ocupadas` : "— ocupadas"}</p><p className={messageClass} role="status">{parking ? availabilityMessage : message}</p><p className="confirmacao" role="status">{confirmation}</p></section>
        <section className="acao" aria-label="Ações do estacionamento"><button className="botao-principal" type="button" disabled={busy || !parking || parking.vagasLivres <= 0} onClick={() => executeAction("entry")}>{parking?.vagasLivres <= 0 ? "ENTRADA BLOQUEADA" : "REGISTRAR ENTRADA"}</button><div className="acoes-secundarias"><button className="botao-secundario" type="button" disabled={busy || !parking} onClick={() => executeAction("undo")}>DESFAZER ÚLTIMA AÇÃO</button><button className="botao-secundario" type="button" disabled={busy || !parking || parking.vagasLivres >= parking.totalVagas} onClick={() => executeAction("exit")}>REGISTRAR SAÍDA</button></div><p className="ultima-entrada">{parking?.ultimaAcao ?? "Nenhuma ação registrada neste turno"}</p><p className="orientacao"><strong>Pronto para registrar?</strong><br />Toque em “Registrar entrada” quando o veículo entrar.</p></section>
        <p className="ultima-atualizacao">Painel atualizado <span>agora</span></p>
      </main>
    </>
  );
}

function getAvailabilityMessage(parking) {
  if (parking.vagasLivres <= 0) return "ERRO: ESTACIONAMENTO LOTADO";
  if (parking.vagasLivres <= parking.totalVagas / 2) return "ATENÇÃO: POUCAS VAGAS";
  return "ENTRADA LIBERADA";
}

function getMessageClass(parking) {
  if (!parking) return "mensagem-carregando";
  if (parking.vagasLivres <= 0 || parking.vagasLivres <= 10) return "mensagem-erro";
  if (parking.vagasLivres <= parking.totalVagas / 2) return "mensagem-laranja";
  return "mensagem-sucesso";
}

export default function App() {
  const [view, setView] = useState(window.location.hash === "#painel" ? "panel" : "landing");

  useEffect(() => {
    const handleHashChange = () => setView(window.location.hash === "#painel" ? "panel" : "landing");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const showPanel = (event) => {
    event?.preventDefault();
    window.location.hash = "painel";
    window.scrollTo(0, 0);
  };

  const showHome = (event) => {
    event?.preventDefault();
    window.location.hash = "inicio";
    window.scrollTo(0, 0);
  };

  return view === "panel" ? <Panel onHome={showHome} /> : <Landing onPanel={showPanel} />;
}
