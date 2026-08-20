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
