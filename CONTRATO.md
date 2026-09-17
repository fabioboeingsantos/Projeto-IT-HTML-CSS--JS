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
- `Registrar entrada` na prévia visual da landing page — a pessoa seleciona o botão e é direcionada ao painel; a entrada não é registrada automaticamente na prévia.

## 3. O que o servidor precisaria fazer

- Ao carregar o painel, devolver o estado atual do estacionamento para que a tela mostre vagas livres, total de vagas, vagas ocupadas e a última ação.
- Ao receber um pedido de registrar entrada, verificar se existe vaga livre. Se existir, diminuir uma vaga livre, atualizar a quantidade ocupada e registrar a entrada como última ação. Se não existir vaga, recusar a operação e informar que o estacionamento está lotado.
- Ao receber um pedido de registrar saída, verificar se existe algum veículo estacionado. Se existir, aumentar uma vaga livre, atualizar a quantidade ocupada e registrar a saída como última ação. Se não existir veículo, recusar a operação e informar o motivo.
- Ao receber um pedido de desfazer, localizar a última entrada ou saída registrada e aplicar o efeito contrário, atualizando as quantidades e a última ação. Se não houver ação anterior, recusar a operação e informar que não há ação para desfazer.
- Nas operações concluídas, devolver o estado atualizado e uma mensagem de confirmação para a tela.
- Nas operações recusadas ou com falha, devolver uma mensagem de erro para que a tela informe que a ação não foi registrada.
- Para os links de navegação, a seção de FAQ e a marca que retorna ao início, não há trabalho do servidor indicado pelo código atual.

## 4. Decisões alinhadas

- O botão “Registrar entrada” da prévia apenas abre o painel. O registro efetivo acontece somente no botão principal do painel.
- O registro de saída altera a contagem geral de vagas; não há identificação individual de veículo nesta versão.
- O desfazer usa uma única sequência compartilhada de ações, mantida no histórico do estacionamento.
- `ultimaAcao` exibe o texto da última operação, incluindo a indicação “agora” nas mensagens geradas pelo servidor.
- “ATENÇÃO: POUCAS VAGAS” é exibido quando `vagasLivres` é menor ou igual à metade de `totalVagas`. A apresentação visual fica mais intensa quando há dez vagas ou menos, sem alterar o texto do status.
- Os números e o status da prévia da landing page permanecem fixos como demonstração; os dados reais aparecem ao abrir o painel.
- O nome “ESTACIONAMENTO DO EVENTO” permanece fixo na interface nesta versão e não é substituído pelo nome retornado pela API.
- `id` e `historico` permanecem como dados internos do servidor e não são exibidos diretamente na interface.

## 5. Rotas REST da API

- `GET /api/parking/1` — consulta o estacionamento pelo ID; um ID inexistente retorna `404`.
- `POST /api/parking/1/entries` — registra uma entrada e atualiza o estado em memória.
- `POST /api/parking/1/exits` — registra uma saída e atualiza o estado em memória.
- `POST /api/parking/1/undo` — desfaz a última entrada ou saída registrada.

O estado é fixo em memória e volta aos valores iniciais quando o servidor é reiniciado.
