# Contrato do painel de estacionamento

## 1. Dados que a tela exibe

- `nome do estacionamento` — texto — aparece na marca do cabeçalho da landing page e do painel como “ESTACIONAMENTO DO EVENTO”; no código, é um texto fixo da interface.
- `vagasLivres` — número — aparece no número principal do painel, sob “VAGAS DISPONÍVEIS”.
- `totalVagas` — número — aparece na linha “de ... vagas totais”, abaixo do número principal.
- `vagasOcupadas` — número — aparece na linha que informa quantas vagas estão ocupadas.
- `status de disponibilidade` — texto — aparece na mensagem principal do painel, com “ENTRADA LIBERADA”, “ATENÇÃO: POUCAS VAGAS” ou “ERRO: ESTACIONAMENTO LOTADO”.
- `mensagem de carregamento ou erro` — texto — aparece na área da mensagem principal enquanto os dados são carregados ou quando há falha de comunicação.
- `confirmação da operação` — texto — aparece logo abaixo da mensagem principal, informando carregamento, sucesso, erro ou confirmação da ação.
- `ultimaAcao` — texto — aparece abaixo dos botões de ação, como a última entrada, saída ou ação desfeita.

## 2. Ações que o usuário dispara

- `Abrir painel`, `Testar o painel`, `Conhecer o painel` ou `Abrir o painel` — a pessoa seleciona um desses links na landing page; a interface muda para o painel e começa a carregar os dados do estacionamento.
- `Registrar entrada` no painel — a pessoa toca no botão principal; depois da confirmação, a tela atualiza as vagas livres, as vagas ocupadas, o status e a mensagem de confirmação.
- `Desfazer última ação` — a pessoa toca no botão secundário; depois da confirmação, a tela reflete o efeito inverso da última entrada ou saída e atualiza a última ação exibida.
- `Registrar saída` — a pessoa toca no botão secundário; depois da confirmação, a tela atualiza as vagas livres, as vagas ocupadas, o status e a mensagem de confirmação.
- `Voltar para o início` — a pessoa seleciona a marca no cabeçalho do painel; a interface retorna para a landing page, sem necessidade de uma ação do servidor.
- `Abrir ou fechar uma dúvida frequente` — a pessoa seleciona uma pergunta da seção de FAQ; a resposta é expandida ou recolhida na própria tela, sem necessidade de uma ação do servidor.
- `Registrar entrada` na prévia visual da landing page — a pessoa vê um botão com esse texto, mas o componente não possui ação associada a ele no código atual.

## 3. O que o servidor precisaria fazer

- Ao carregar o painel, devolver o estado atual do estacionamento para que a tela mostre vagas livres, total de vagas, vagas ocupadas e a última ação.
- Ao receber um pedido de registrar entrada, verificar se existe vaga livre. Se existir, diminuir uma vaga livre, atualizar a quantidade ocupada e registrar a entrada como última ação. Se não existir vaga, recusar a operação e informar que o estacionamento está lotado.
- Ao receber um pedido de registrar saída, verificar se existe algum veículo estacionado. Se existir, aumentar uma vaga livre, atualizar a quantidade ocupada e registrar a saída como última ação. Se não existir veículo, recusar a operação e informar o motivo.
- Ao receber um pedido de desfazer, localizar a última entrada ou saída registrada e aplicar o efeito contrário, atualizando as quantidades e a última ação. Se não houver ação anterior, recusar a operação e informar que não há ação para desfazer.
- Nas operações concluídas, devolver o estado atualizado e uma mensagem de confirmação para a tela.
- Nas operações recusadas ou com falha, devolver uma mensagem de erro para que a tela informe que a ação não foi registrada.
- Para os links de navegação, a seção de FAQ e a marca que retorna ao início, não há trabalho do servidor indicado pelo código atual.

## 4. Dúvidas para o professor

- ? O botão “Registrar entrada” que aparece na prévia da landing page deve ser apenas ilustrativo ou também deve abrir o painel/registrar uma ação? Atualmente ele não possui comportamento associado.
- ? O registro de saída precisa identificar qual veículo saiu ou basta alterar a contagem geral de vagas? O código atual trabalha somente com a contagem.
- ? O desfazer deve considerar uma única sequência compartilhada de ações ou deveria ser separado por operador, dispositivo ou turno? O código atual mantém um único histórico.
- ? A expressão “última ação” deve mostrar somente o texto da ação ou também data e hora? A tela atual mostra apenas texto, com “agora” nas mensagens definidas pelo servidor.
- ? Qual é o limite oficial para mostrar “ATENÇÃO: POUCAS VAGAS”? O código usa metade da capacidade para o texto, mas aplica uma regra diferente para a classe visual de erro quando há dez vagas ou menos.
- ? Os valores de 50 vagas, 0 ocupadas e “ENTRADA LIBERADA” na prévia da landing page devem acompanhar os dados reais ou continuar como demonstração fixa?
- ? O nome do estacionamento precisa vir dos dados do servidor? Na interface atual, “ESTACIONAMENTO DO EVENTO” está escrito diretamente nos componentes.
- ? Os dados `id` e `historico`, presentes no arquivo de dados, devem permanecer apenas como suporte interno ou algum deles deverá aparecer na interface? Nenhum deles é exibido atualmente.
