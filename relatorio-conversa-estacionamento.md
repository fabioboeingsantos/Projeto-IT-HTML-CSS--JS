# Relatório do projeto: Estacionamento do Evento

## Problema da persona

Tiago trabalha na entrada de um evento. Ele está usando luvas, pode estar na chuva e tem aproximadamente dois segundos para decidir se um carro pode entrar.

Relato do usuário:

> “O carro para na minha frente e eu preciso responder rapidamente se ele pode entrar. Como estou trabalhando em evento, muitas vezes com chuva e usando luvas, não posso ficar procurando informações ou digitando. Preciso bater o olho e saber quantas vagas ainda estão disponíveis.”

## Solução proposta

Foi criada uma tela simples de controle de estacionamento usando somente HTML, CSS e JavaScript.

A tela apresenta:

- Nome do estacionamento.
- Quantidade de vagas livres.
- Capacidade total do estacionamento.
- Mensagem visual informando se a entrada está liberada.
- Botão para registrar uma entrada.
- Botão para desfazer a última entrada em caso de erro ou desistência.
- Mensagem de confirmação da ação realizada.

## Indicador de vagas

O número é apresentado no formato:

```text
127/127
LIVRES / TOTAL
```

O primeiro número representa as vagas livres. O segundo representa o total de vagas do estacionamento.

Exemplo: `126/127` significa que existem 126 vagas livres de um total de 127.

## Mensagens do sistema

- `ENTRADA LIBERADA`: existem vagas disponíveis.
- `ATENÇÃO: POUCAS VAGAS`: restam menos de dez vagas.
- `ERRO: ESTACIONAMENTO LOTADO`: não existem vagas disponíveis.
- `ENTRADA CONFIRMADA`: uma entrada foi registrada.
- `ENTRADA DESFEITA`: uma entrada foi revertida.
- `ENTRADA NÃO REGISTRADA`: tentativa de entrada quando o estacionamento está lotado.
- `NENHUMA ENTRADA PARA DESFAZER`: não há entrada anterior para reverter.

## Simulação de banco de dados

Os dados principais são organizados em uma lista de objetos no JavaScript:

```js
const bancoEstacionamento = [
  {
    id: 1,
    nome: "Estacionamento do Evento",
    vagasLivres: 127,
    totalVagas: 127
  }
];
```

Essa lista representa uma tabela simples de banco de dados. O sistema acessa o primeiro registro e altera a quantidade de vagas livres conforme as ações do usuário.

## Restrições respeitadas

- HTML, CSS e JavaScript puro.
- Sem bibliotecas ou frameworks.
- Sem `innerHTML`.
- Sem função de seta (`=>`).
- Sem comparação com `==`.
- Uso de `===` nas comparações.
- Sem campos para digitar valores.
- Sem `alert()`.
- Uso de `textContent` para alterar textos na tela.
- Uso de `addEventListener("click", funcao)` para os botões.
- Uso de classes CSS para controlar os estados visuais.

## Arquivos criados

- `index.html`: estrutura da tela.
- `estilo.css`: cores, tamanhos, alinhamento e responsividade.
- `script.js`: regras, funções, eventos e dados simulados.

## Conceitos utilizados

- `let`: cria uma variável que pode mudar.
- `document.querySelector`: encontra um elemento na página.
- `textContent`: altera o texto de um elemento.
- `function`: cria uma função.
- `addEventListener`: espera uma ação do usuário.
- `"click"`: representa o clique em um botão.
- Nome da função sem parênteses: passa a função para ser executada depois.

## Declaração de uso de IA

- **A especificação que escrevi antes de pedir:** criar uma tela de consulta rápida para controlar as vagas de um estacionamento de evento.
- **O que a IA gerou:** os arquivos HTML, CSS e JavaScript, incluindo os botões, mensagens, contador e simulação de banco de dados.
- **As lacunas que preenchi à mão:** orientação da equipe, responsável pelo controle e horário de atualização.
- **O que mudei no que ela entregou, e por quê:** acrescentei o botão para desfazer entradas, mensagens de confirmação e o indicador `livres/total`, para reduzir erros durante o atendimento.
- **O que ela sugeriu e eu recusei, e por quê:** não foram utilizados campos de digitação, bibliotecas, frameworks ou mensagens `alert`, pois são desnecessários ou proibidos pelas regras do projeto.
-
## Etapa 3: análise das quatro perguntas obrigatórias

### 1. O que esse código faz, em uma frase, sem termo técnico?

**Análise:** verifica se consigo explicar a finalidade do sistema para uma pessoa que não programa.

**Resposta:** este sistema mostra quantas vagas ainda estão disponíveis e permite registrar a entrada de cada carro no estacionamento do evento.

**Ajuste pessoal:** [reescrever com minhas palavras].

### 2. Qual linha você não consegue explicar?

**Análise:** verifica se revisei o código e reconheço uma parte que ainda preciso estudar.

**Resposta inicial:** eu ainda tenho dificuldade para explicar completamente a linha `document.querySelector("#quantidade-vagas")`. Entendo que ela encontra na tela o elemento que mostra as vagas, mas ainda preciso revisar como o seletor com `#` localiza um elemento pelo seu identificador.

**Ajuste pessoal:** [substituir pela linha que realmente gera dúvida].

### 3. O que acontece se apagar a linha que o professor apontar?

**Análise:** verifica se entendo a consequência prática de remover uma instrução do código.

**Resposta inicial:** se eu apagar a linha `const quantidadeVagas = document.querySelector("#quantidade-vagas")`, a função que atualiza o painel não conseguirá alterar corretamente o número de vagas e o navegador poderá apresentar um erro no JavaScript.

**Ajuste pessoal:** [adaptar à linha indicada pelo professor].

### 4. Onde a IA desobedeceu ao seu prompt?

**Análise:** verifica se comparei o prompt, a tabela de requisitos e o código entregue pela IA.

**Resposta inicial:** a IA desobedeceu parcialmente ao requisito de entregar textos finais sem comentários de revisão. O código veio com comentários como `COMPLETAR` e `DECISAO SUA`, que deveriam ser retirados ou reescritos antes da entrega. Também houve problemas de acentuação em alguns textos, como `AÃ‡ÃƒO`, o que prejudica a leitura.

**Ajuste pessoal:** [manter somente os pontos confirmados na comparação com o prompt].

## Revisão final da Etapa 3

1. Digitar o prompt original sem modificar.
2. Conferir a tabela de requisitos linha por linha.
3. Marcar cada ponto em que o código desobedece ao combinado.
4. Corrigir a tela até atender a todos os requisitos.
5. Apagar comentários da IA e reescrever as explicações com minhas palavras.

### Checklist de conferência

- [ ] O texto da interface está correto e com acentuação adequada.
- [ ] A quantidade de vagas diminui ao registrar uma entrada.
- [ ] A entrada é bloqueada quando o estacionamento está lotado.
- [ ] A ação de desfazer recupera a última entrada.
- [ ] A tela informa quando restam poucas vagas.
- [ ] Os comentários da IA foram revisados ou removidos.
- [ ] As quatro perguntas foram respondidas por escrito.
- [ ] As respostas foram ajustadas com minhas próprias palavras.

## Atualização visual e funcional da tela

Para aproximar o sistema de um estacionamento real, foram feitas novas melhorias mantendo as regras do projeto.

### Melhorias adicionadas

- O painel agora mostra vagas livres, vagas ocupadas e capacidade total.
- A informação principal passou a ser exibida como “vagas disponíveis”, reduzindo a necessidade de interpretação.
- O sistema informa a última entrada registrada ou desfeita.
- O botão de entrada fica bloqueado quando o estacionamento está lotado.
- A orientação ao atendente foi reescrita para indicar exatamente o momento da ação: “Toque em Registrar entrada quando o veículo entrar”.
- A informação de atualização foi simplificada para “Painel atualizado agora”.
- A orientação recebeu destaque visual próprio, sem competir com o contador de vagas.

### Por que essas mudanças melhoram a experiência

O atendente trabalha com pouco tempo e precisa tomar uma decisão rápida. Mostrar “vagas disponíveis” e “vagas ocupadas” reduz contas mentais. Informar a última ação ajuda a confirmar que o toque foi realizado. Bloquear o botão quando não há vagas evita uma ação inválida. A orientação contextual explica o próximo passo sem exigir treinamento ou leitura extensa.

### Comentários no código

Foram mantidos comentários explicativos nos trechos novos do HTML, CSS e JavaScript. Cada comentário registra o motivo da decisão, por exemplo:

- por que a ocupação é mostrada separadamente;
- por que a última ação é exibida;
- por que o botão é bloqueado quando o estacionamento está lotado;
- por que a instrução aparece próxima às ações.

Esses comentários ajudam a explicar a relação entre o requisito da persona e a implementação, mas devem ser revisados e reescritos com as palavras do aluno antes da entrega final.
