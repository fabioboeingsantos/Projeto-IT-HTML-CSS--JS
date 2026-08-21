# Folha de Persona e Diretrizes de UX

## 1. Identificação da persona

**Nome:** Tiago Almeida  
**Idade:** 28 anos  
**Cargo:** atendente de entrada do estacionamento  
**Contexto:** trabalha na entrada de eventos, em períodos de movimento intenso, às vezes sob chuva e usando luvas.

## 2. Frase da persona

> “O carro para na minha frente e eu preciso responder rapidamente se ele pode entrar. Não posso perder tempo procurando informação ou digitando.”

## 3. Objetivo principal

Saber imediatamente se há vagas e registrar a entrada do veículo com uma única ação, sem interromper o atendimento.

## 4. Necessidades

- Ver a quantidade de vagas livres em destaque.
- Identificar o estado do estacionamento sem interpretar tabelas ou menus.
- Usar botões grandes, fáceis de tocar mesmo com luvas.
- Receber confirmação visual após cada ação.
- Corrigir rapidamente uma entrada registrada por engano.
- Usar a tela em celular ou tablet, com boa leitura à distância.

## 5. Dores e dificuldades

- Pouco tempo para tomar decisão.
- Fila e pressão durante os horários de pico.
- Chuva, reflexo e baixa visibilidade.
- Uso de luvas, que dificulta toques precisos.
- Risco de registrar uma entrada duplicada ou esquecer se a ação foi concluída.
- Informação pequena, escondida ou com excesso de elementos.

## 6. Comportamento esperado

1. Olhar para a tela.
2. Identificar vagas livres e o status da entrada.
3. Informar ao motorista se ele pode entrar.
4. Tocar em **Registrar entrada**.
5. Confirmar visualmente que a contagem foi atualizada.

O fluxo ideal deve ser concluído sem formulário, teclado, menu ou janela de confirmação.

## 7. Perguntas respondidas da folha de persona

### Quem é o usuário?

É o atendente responsável por controlar a entrada de veículos em um estacionamento de evento.

### O que ele precisa fazer?

Consultar a disponibilidade e registrar cada entrada de forma rápida e confiável.

### Qual é o problema?

O usuário precisa tomar uma decisão imediata em um ambiente de alta demanda, com condições que dificultam a interação, como chuva, luvas e fila de veículos.

### O que causa frustração?

Contadores pouco visíveis, mensagens ambíguas, botões pequenos, necessidade de digitar e ausência de confirmação após o toque.

### O que representa sucesso?

O atendente consegue responder ao motorista em até dois segundos, registra a entrada com um toque e percebe claramente o resultado da ação.

### Qual é a principal frase do usuário?

“Preciso bater o olho e saber quantas vagas ainda estão disponíveis.”

## 8. Requisitos de experiência

### Prioridade visual

1. Status: entrada liberada, poucas vagas ou lotado.
2. Número de vagas livres.
3. Ação principal: registrar entrada.
4. Confirmação da última ação.
5. Ação secundária: desfazer.

### Regras de interface

- Exibir “vagas livres / total” com legenda explícita.
- Usar frases curtas e diretas.
- Manter o botão principal grande e sempre no mesmo lugar.
- Usar cor como reforço, nunca como único indicador.
- Diferenciar visualmente estados normal, atenção e bloqueado.
- Evitar campos de texto e etapas desnecessárias.
- Garantir contraste alto e fonte legível.
- Não exigir precisão de toque: áreas clicáveis amplas.

## 9. Melhorias aplicadas ou recomendadas

- Trocar textos em caixa alta por frases curtas com melhor leitura, sem perder destaque.
- Apresentar o número de vagas livres isolado e maior; deixar o total como informação complementar.
- Manter a mensagem de status próxima do contador, criando uma leitura em sequência.
- Exibir a confirmação com contexto, por exemplo: “Entrada registrada. 126 vagas livres”.
- Desabilitar visualmente o botão quando o estacionamento estiver lotado.
- Manter “Desfazer última entrada” como ação secundária, afastada da ação principal para reduzir toques acidentais.
- Incluir horário da última atualização e identificação do local, caso o sistema seja usado em mais de um estacionamento.
- Usar estados visuais e texto simultaneamente para apoiar usuários com baixa visão ou em ambientes com muito reflexo.

## 10. Critérios de validação

A tela atende à persona quando o atendente consegue:

- encontrar o número de vagas sem procurar;
- entender o status sem conhecer o sistema;
- registrar uma entrada sem digitar;
- perceber a confirmação em menos de dois segundos;
- desfazer um erro sem reiniciar a tela;
- usar a interface confortavelmente em uma tela pequena.

## 11. Resumo da decisão de UX

O produto deve funcionar como um painel operacional, e não como um cadastro. A tela precisa reduzir a leitura ao essencial: **quantas vagas existem, se o carro pode entrar e qual ação foi registrada**. Toda informação que não ajuda nessa decisão deve ficar em segundo plano.

