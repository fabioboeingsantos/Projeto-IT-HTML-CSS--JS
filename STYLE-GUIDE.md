# Style Guide — Estacionamento do Evento

Documento de referência visual, verbal e funcional para a evolução do painel e a criação da landing page.

## 1. Essência do produto

O projeto é um painel operacional para atendentes de estacionamento em eventos. A interface deve permitir que a pessoa:

1. veja imediatamente quantas vagas estão livres;
2. entenda se a entrada está liberada;
3. registre uma entrada com um toque;
4. perceba a confirmação da ação;
5. corrija rapidamente uma entrada feita por engano.

O produto deve parecer rápido, direto, confiável e resistente a ambientes de alta demanda.

## 2. Persona e contexto de uso

- **Usuário principal:** Tiago Almeida, 28 anos, atendente da entrada.
- **Ambiente:** evento movimentado, fila de veículos, chuva, reflexo e uso de luvas.
- **Dispositivo:** celular ou tablet, com leitura à distância.
- **Tempo de decisão:** aproximadamente dois segundos.
- **Princípio central:** o usuário deve conseguir “bater o olho” e tomar uma decisão sem formulário, teclado, menu ou confirmação intermediária.

## 3. Direção visual

### Personalidade

Operacional, objetiva, urbana, tecnológica e confiável. O visual usa fundo escuro, alto contraste, números grandes e cores de estado fortes.

### Hierarquia

1. Estado do estacionamento.
2. Quantidade de vagas livres.
3. Botão de registrar entrada.
4. Confirmação da última ação.
5. Ações secundárias e informações complementares.

## 4. Cores

| Token | Valor atual | Uso |
|---|---|---|
| `--azul-noite` | `#071B2D` | Fundo principal e texto escuro sobre estados claros |
| `--azul-painel` | `#0D2E49` | Cartões, painel de vagas e áreas de destaque |
| `--azul-botao` | `#1597D4` | Ação principal |
| `--branco` | `#F7FBFF` | Texto principal, bordas e alto contraste |
| `--verde` | `#39E58C` | Estado positivo, conexão e entrada liberada |
| `--amarelo` | `#FFD166` | Carregamento e atenção inicial |
| `--laranja` | `#F59E0B` | Atenção: quantidade reduzida de vagas |
| `--vermelho` | `#FF6B6B` | Erro, lotação e bloqueio |

### Cores auxiliares existentes

- `#A9C0D2`: status de conexão e histórico.
- `#91AEC1`: ocupação complementar.
- `#B7C9D8`: textos secundários, legendas e botões secundários.
- `#7F9AAE`: última atualização.
- `#D8E8F2`: texto da orientação.
- `#536B7B`: botão principal desabilitado.
- `#8DA2B0`: borda do botão desabilitado.
- `#6F8DA3`: borda dos botões secundários.

### Regras de cor

- Nunca usar cor como único indicador: sempre combinar cor com texto.
- Verde comunica sucesso, disponibilidade e conexão.
- Amarelo comunica carregamento ou atenção inicial.
- Laranja comunica redução de disponibilidade.
- Vermelho comunica erro, lotação ou ação bloqueada.
- Manter contraste alto entre fundo azul escuro e textos claros.

## 5. Tipografia

- **Família atual:** `Arial, sans-serif`.
- **Título/marca:** 22px, peso 700.
- **Número principal:** 96px, peso 700, line-height 1.
- **Rótulo principal:** 16px, peso 700, letter-spacing 1.4px.
- **Mensagem de status:** 22px, peso 700.
- **Botão principal:** 19px, peso 700.
- **Botão secundário:** 14px, peso 700.
- **Texto de confirmação:** 14px, peso 600.
- **Texto auxiliar:** 12–15px.

### Diretrizes de texto

- Usar frases curtas e concretas.
- Preferir verbos de ação: “Registrar entrada”, “Registrar saída”, “Desfazer”.
- Manter termos consistentes: “vagas livres”, “vagas totais”, “ocupadas”, “entrada” e “saída”.
- Caixa alta pode ser usada em status e ações operacionais, mas textos explicativos devem privilegiar leitura natural.

## 6. Espaçamento e forma

- Margem lateral padrão em telas pequenas: `16px`.
- Padding do painel: `30px 18px 28px`.
- Espaçamento entre blocos: 14–26px.
- Raio padrão de controles: `12px`.
- Raio do painel principal: `18px`.
- Botões com área ampla para uso com luvas.
- Sombra do painel: `0 14px 32px rgba(0, 0, 0, .18)`.
- Bordas visíveis para reforçar agrupamento e acessibilidade.

## 7. Componentes

### Cabeçalho

Classes: `.cabecalho`, `.marca`, `.status-conexao`, `.status-ponto`.

- Marca no topo, centralizada.
- Status abaixo da marca.
- Ponto verde indica conexão/controle ativo.
- O cabeçalho tem padding superior de 32–36px.

### Painel de vagas

Classe: `.painel-vagas`.

- Cartão central em azul-painel.
- Número livre é o elemento dominante.
- Total e ocupação aparecem como informação complementar.
- Mensagem de estado fica dentro do mesmo cartão para manter a leitura em sequência.

### Mensagem de estado

Classe base: `.mensagem`.

Estados existentes:

- `.mensagem-carregando`: amarelo.
- `.mensagem-sucesso`: verde.
- `.mensagem-laranja`: laranja.
- `.mensagem-erro`: vermelho.
- `.mensagem-atencao`: token amarelo, preparado para atenção.

Mensagens atuais:

- `CARREGANDO DADOS...`
- `DADOS CARREGADOS COM SUCESSO`
- `ENTRADA LIBERADA`
- `ATENÇÃO: POUCAS VAGAS`
- `ERRO: ESTACIONAMENTO LOTADO`

### Botão principal

Classe: `.botao-principal`.

- Largura total.
- Padding vertical de 22px.
- Fundo azul de ação.
- Borda branca de 3px.
- Hover/focus clareia o azul e exibe sombra.
- Active reduz levemente a escala.
- Disabled usa azul acinzentado e cursor bloqueado.

### Botões secundários

Classes: `.acoes-secundarias`, `.botao-secundario`.

- Duas ações dividem a largura disponível.
- Fundo transparente.
- Borda azul-acinzentada.
- Hover/focus adiciona fundo translúcido.
- Usar para saída e desfazer, nunca para competir visualmente com a entrada.

### Orientação operacional

Classe: `.orientacao`.

- Caixa transparente com borda clara de 2px.
- Texto curto, centralizado e com line-height 1.5.
- Título em branco para destacar a instrução.

### Informações de apoio

Classes: `.confirmacao`, `.ultima-entrada`, `.ultima-atualizacao`.

- Devem permanecer visíveis, mas em baixo contraste relativo.
- Servem para confirmar a ação e contextualizar o estado sem competir com o contador.

## 8. Estados funcionais

| Estado | Indicador visual | Comportamento |
|---|---|---|
| Carregando | Amarelo | Ações principais bloqueadas enquanto o JSON é lido |
| Entrada liberada | Verde | Entrada disponível |
| Poucas vagas, até metade | Laranja | Entrada continua disponível |
| Poucas vagas, até 10 | Vermelho | Atenção forte; entrada ainda disponível |
| Lotado | Vermelho | Botão de entrada bloqueado |
| Entrada confirmada | Texto de confirmação | Contador diminui em 1 |
| Entrada desfeita | Texto de confirmação | Contador aumenta em 1, limitado ao total |
| Saída registrada | Texto de confirmação | Contador aumenta em 1 |
| Sem entrada para desfazer | Mensagem textual | Nenhuma alteração no contador |
| Sem veículo para saída | Mensagem textual | Nenhuma alteração no contador |
| Falha de carregamento | Vermelho | Entrada e saída bloqueadas |

## 9. Responsividade

- Base mobile-first.
- Largura com margem de 16px em telas pequenas.
- A partir de `600px`, painel e área de ações ficam com `560px` e centralizados.
- Não reduzir o contador a ponto de perder leitura à distância.
- Preservar áreas de toque grandes em qualquer viewport.

## 10. Acessibilidade e uso em campo

- Manter contraste alto.
- Usar texto junto com cores.
- Manter foco visível com `:focus-visible`.
- Usar `type="button"` nos controles.
- Evitar textos longos dentro de botões.
- Manter alvos de toque amplos, especialmente para luvas e chuva.
- Não depender de hover para comunicar informação essencial.
- Usar linguagem simples, sem termos técnicos.

## 11. Regras para a futura landing page

A landing page deve apresentar o produto como uma solução de operação rápida, e não como um sistema administrativo.

### Estrutura sugerida

1. Hero com promessa objetiva: controle de entrada sem perder tempo.
2. Demonstração visual do painel com contador grande.
3. Benefícios: decisão rápida, menos erros e operação com um toque.
4. Contexto de uso: eventos, filas, chuva, luvas e celular/tablet.
5. Como funciona em três passos.
6. Bloco de confiança com estados claros e confirmação visual.
7. CTA principal para testar o painel.

### Direção do hero

- Fundo azul-noite.
- Headline curta e orientada ao resultado.
- Destaque visual em verde ou azul-botão.
- Mockup do painel usando o mesmo contador, status e botão principal.
- CTA com o mesmo tratamento do `.botao-principal`.

### Mensagem de marca

Usar uma linguagem que enfatize velocidade, clareza e controle:

- “Saiba em dois segundos se ainda há vaga.”
- “Registre entradas com um toque.”
- “Menos fila. Menos erro. Mais controle.”

## 12. Dados e contrato atual

O painel consulta a API e recebe estes campos no estado do estacionamento:

```json
{
  "id": 1,
  "nome": "Estacionamento do Evento",
  "vagasLivres": 50,
  "totalVagas": 50,
  "vagasOcupadas": 0
}
```

O estado é mantido em memória no backend e reiniciado com os valores iniciais quando o servidor é reiniciado. O painel calcula a ocupação a partir de `totalVagas - vagasLivres` para evitar duplicidade.

## 13. Pontos de atenção identificados

- O arquivo atual contém comentários de decisão e implementação misturados ao código. Para produção, separar documentação de UX do código e manter comentários apenas quando explicarem uma regra não óbvia.
- A landing page deve reutilizar os tokens de cor e componentes principais, mas pode usar uma escala tipográfica mais editorial para comunicar valor comercial.

## 14. Fonte do levantamento

Este guia foi consolidado a partir de `frontend/src/App.jsx`, `frontend/landing.css`, `frontend/estilo.css`, `backend/main.py`, `backend/routers`, `backend/models.py`, `backend/store.py` e `documento-persona-ux.md` do projeto.
