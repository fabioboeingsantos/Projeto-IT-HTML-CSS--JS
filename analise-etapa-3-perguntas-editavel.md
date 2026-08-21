# Etapa 3 

**Projeto:** Sistema de controle de entrada do estacionamento do evento  

## Como este documento foi montado

As perguntas devem ser respondidas por escrito antes de considerar a etapa concluída. A análise abaixo explica o que cada pergunta avalia e apresenta uma resposta inicial baseada no código HTML, CSS e JavaScript do projeto.

---

## Pergunta 1

### O que esse código faz, em uma frase, sem termo técnico?

### O que a pergunta está avaliando

Esta pergunta verifica se o aluno entendeu a finalidade do sistema e consegue explicá-la para uma pessoa que não programa. A resposta deve falar sobre o resultado para o usuário, e não sobre HTML, CSS, JavaScript, funções ou banco de dados.

### Resposta inicial

**Este sistema mostra quantas vagas ainda estão disponíveis e permite registrar a entrada de cada carro no estacionamento do evento.**

### Por que esta resposta funciona

- Explica a função principal da tela.
- Usa linguagem comum.
- Resume as duas ações essenciais: consultar vagas e registrar entrada.
- Não depende de termos técnicos.

### Minha versão final

[Reescreva aqui com as suas palavras, mantendo uma única frase.]

---

## Pergunta 2

### Qual linha você não consegue explicar?

### O que a pergunta está avaliando

Esta pergunta verifica se o aluno revisou o código de verdade e consegue identificar uma parte que ainda precisa estudar. Não é necessário dizer que entende tudo. Uma boa resposta aponta a linha ou trecho, explica a dúvida e registra o que precisa ser pesquisado.

### Resposta inicial

**Eu ainda tenho dificuldade para explicar completamente a linha `document.querySelector("#quantidade-vagas")`. Entendo que ela encontra o elemento da tela que mostra as vagas, mas ainda preciso revisar como o seletor com `#` localiza um elemento pelo seu identificador.**

### Outra opção, se esta não for a sua dúvida

**Eu ainda tenho dificuldade para explicar como `addEventListener("click", registrarEntrada)` espera o clique do usuário e executa a função somente depois que o botão é pressionado.**

### Como escolher a resposta

Escolha apenas o trecho que realmente gera dúvida. Substitua o exemplo acima por uma linha existente no seu código e não diga que não entende uma parte que já consegue explicar.

### Minha versão final

**Linha ou trecho:** [colar aqui]  
**O que eu já entendo:** [escrever aqui]  
**O que ainda preciso estudar:** [escrever aqui]

---

## Pergunta 3

### O que acontece se apagar a linha que o professor apontar?

### O que a pergunta está avaliando

Esta pergunta verifica se o aluno entende a consequência prática de remover uma instrução do programa. A resposta deve explicar o efeito visível ou o erro que pode acontecer, em vez de apenas dizer que “o código quebra”.

### Resposta inicial

**Se eu apagar a linha `const quantidadeVagas = document.querySelector("#quantidade-vagas")`, o programa deixa de guardar a referência ao número de vagas. Quando a função `atualizarPainel()` tentar alterar esse elemento, a tela não conseguirá atualizar corretamente e o navegador poderá apresentar um erro no JavaScript.**

### Por que esta resposta funciona

- Identifica a linha removida.
- Relaciona a linha com a função que depende dela.
- Explica o efeito para o usuário: o painel não atualiza.
- Mostra que o problema acontece durante a execução, não necessariamente na abertura da página.

### Como adaptar à linha escolhida pelo professor

Use este modelo:

**Se eu apagar a linha `[linha]`, a parte `[função ou elemento]` deixará de `[ação]`. Para o usuário, isso causará `[efeito visível]`.**

### Minha versão final

[Escreva aqui a consequência da linha que o professor indicar.]

---

## Pergunta 4

### Onde a IA desobedeceu ao seu prompt?

### O que a pergunta está avaliando

Esta pergunta verifica se o aluno comparou o resultado produzido pela IA com o prompt e com a tabela de requisitos. A resposta deve ser honesta, específica e baseada em evidências do projeto. Se a IA não desobedeceu em algum item, isso também pode ser informado, desde que o aluno cite o que conferiu.

### Resposta inicial

**A IA desobedeceu parcialmente ao requisito de entregar textos prontos e sem comentários para o usuário final. O código veio com comentários como `COMPLETAR` e `DECISAO SUA`, que são úteis durante a revisão, mas não deveriam permanecer como conteúdo final do projeto. Além disso, alguns textos apareceram com caracteres acentuados corrompidos, como “AÃ‡ÃƒO”, o que prejudica a leitura.**

### Pontos conferidos na revisão

- [ ] O código mantém apenas HTML, CSS e JavaScript puro.
- [ ] Não foram adicionados campos de digitação desnecessários.
- [ ] Não foi usado `alert()`.
- [ ] As comparações usam `===`.
- [ ] Os botões funcionam por eventos de clique.
- [ ] A contagem diminui ao registrar uma entrada.
- [ ] A ação de desfazer recupera a última entrada.
- [ ] A tela informa quando há poucas vagas.
- [ ] A tela bloqueia a entrada quando não há vagas.
- [ ] Os comentários da IA foram revisados e reescritos com minhas palavras.
- [ ] A acentuação dos textos foi corrigida.


