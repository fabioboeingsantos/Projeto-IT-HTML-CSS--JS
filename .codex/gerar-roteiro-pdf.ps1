$outputDirectory = Join-Path (Get-Location) "output\pdf"
New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null
$outputFile = Join-Path $outputDirectory "roteiro-apresentacao-projeto.pdf"

$pages = @(
  @(
    "ROTEIRO DE APRESENTACAO - ESTACIONAMENTO DO EVENTO",
    "",
    "1. COMO COMECAR",
    "Meu projeto foi criado para resolver uma situacao de atendimento em um",
    "estacionamento de evento. O usuario esta com luvas, pode estar na chuva",
    "e tem aproximadamente dois segundos para decidir se um carro pode entrar.",
    "",
    "Por isso, a tela mostra a informacao principal de forma grande e possui",
    "uma acao simples para registrar a entrada.",
    "",
    "2. APRESENTAR O HTML",
    "O arquivo index.html representa a estrutura da pagina.",
    "",
    "- header: identifica o estacionamento e o controle de entrada.",
    "- main: reune o conteudo principal.",
    "- section: agrupa o painel de vagas e os botoes.",
    "- button: cria as acoes de entrada e de desfazer.",
    "- p: apresenta textos, quantidade e mensagens.",
    "",
    "O botao verde ENTRADA LIBERADA tambem registra a entrada, deixando a",
    "acao principal no mesmo local do status visual."
  ),
  @(
    "3. APRESENTAR O CSS",
    "O arquivo estilo.css cuida da aparencia da pagina.",
    "",
    "Principais decisoes visuais:",
    "- fundo escuro para facilitar a leitura;",
    "- numero de vagas em tamanho grande;",
    "- verde para entrada liberada; amarelo para poucas vagas; vermelho para lotado;",
    "- botoes grandes para facilitar o toque usando luvas;",
    "- Flexbox para organizar os elementos;",
    "- media query para telas maiores.",
    "",
    "O CSS separa a aparencia das regras do JavaScript.",
    "O display flex, a direcao em coluna e o alinhamento central organizam",
    "os elementos do painel.",
    "",
    "4. APRESENTAR O JAVASCRIPT",
    "O arquivo script.js controla os dados, as acoes e as mensagens.",
    "",
    "document.querySelector encontra elementos do HTML.",
    "textContent altera os textos que aparecem na tela.",
    "function cria uma acao reutilizavel.",
    "addEventListener (click, funcao) liga o toque a uma funcao."
  ),
  @(
    "5. SIMULACAO DO BANCO DE DADOS",
    "Os dados principais ficam em uma lista de objetos:",
    "",
    "const bancoEstacionamento = [",
    "  { id: 1, nome: Estacionamento do Evento,",
    "    vagasLivres: 127, totalVagas: 127 }",
    "];",
    "",
    "Essa lista representa uma tabela simples de banco de dados.",
    "Ela guarda o identificador, o nome, as vagas livres e o total.",
    "",
    "6. REGISTRO DA ENTRADA",
    "Ao tocar no botao verde, o sistema verifica se existem vagas.",
    "Se houver vaga, diminui uma unidade e atualiza a tela.",
    "Se o numero chegar a zero, a entrada fica bloqueada.",
    "",
    "7. COMO DESFAZER",
    "O botao DESFAZER ULTIMA ENTRADA devolve uma vaga ao painel.",
    "Ele so funciona quando uma entrada foi registrada antes.",
    "Isso corrige um toque acidental ou a desistencia do cliente."
  ),
  @(
    "8. DEMONSTRACAO PRATICA",
    "1. Mostrar a tela inicial com 127 vagas livres.",
    "2. Explicar que o botao verde indica entrada liberada.",
    "3. Clicar em ENTRADA LIBERADA.",
    "4. Mostrar que o numero passa para 126.",
    "5. Mostrar a mensagem ENTRADA CONFIRMADA.",
    "6. Clicar em DESFAZER ULTIMA ENTRADA.",
    "7. Mostrar que o numero volta para 127.",
    "8. Mostrar a mensagem ENTRADA DESFEITA.",
    "",
    "9. DIFICULDADES ENCONTRADAS",
    "- criar uma tela rapida para chuva e uso de luvas;",
    "- permitir a correcao de uma entrada registrada por engano;",
    "- explicar claramente a quantidade livre e a capacidade total;",
    "- respeitar as regras sem innerHTML, arrow function, ==, bibliotecas,",
    "  frameworks ou campos de digitacao.",
    "",
    "ENCERRAMENTO",
    "O HTML organiza a estrutura, o CSS cuida da aparencia e o JavaScript",
    "controla os dados e as acoes. O resultado e uma tela simples e rapida."
  )
)

function Convert-ToPdfText($text) {
  $safeText = $text.Replace('\', '\\').Replace('(', '\(').Replace(')', '\)')
  return $safeText
}

$objects = New-Object System.Collections.Generic.List[string]
$objects.Add("<< /Type /Catalog /Pages 2 0 R >>")
$pageObjectNumbers = @()
$contentObjectNumbers = @()
$nextObject = 3
foreach ($page in $pages) {
  $pageObjectNumbers += $nextObject
  $contentObjectNumbers += ($nextObject + 1)
  $nextObject += 2
}
$kids = ($pageObjectNumbers | ForEach-Object { "$_ 0 R" }) -join " "
$objects.Add("<< /Type /Pages /Kids [$kids] /Count $($pages.Count) >>")
$fontObject = 3 + ($pages.Count * 2)
for ($pageIndex = 0; $pageIndex -lt $pages.Count; $pageIndex++) {
  $page = $pages[$pageIndex]
  $pageNumber = 3 + ($pageIndex * 2)
  $contentNumber = $pageNumber + 1
  $lines = @("BT", "/F1 14 Tf", "50 770 Td")
  $firstLine = $true
  foreach ($line in $page) {
    if (-not $firstLine) { $lines += "0 -20 Td" }
    $lines += "($(Convert-ToPdfText $line)) Tj"
    $firstLine = $false
  }
  $lines += "ET"
  $stream = $lines -join "`n"
  $objects.Add("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 $fontObject 0 R >> >> /Contents $contentNumber 0 R >>")
  $objects.Add("<< /Length $($stream.Length) >>`nstream`n$stream`nendstream")
}
$objects.Add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")

$builder = New-Object System.Text.StringBuilder
[void]$builder.Append("%PDF-1.4`n")
$offsets = New-Object System.Collections.Generic.List[int]
for ($i = 0; $i -lt $objects.Count; $i++) {
  $offsets.Add($builder.Length)
  [void]$builder.Append("$($i + 1) 0 obj`n$($objects[$i])`nendobj`n")
}
$xrefOffset = $builder.Length
[void]$builder.Append("xref`n0 $($objects.Count + 1)`n0000000000 65535 f `n")
foreach ($offset in $offsets) { [void]$builder.Append(("{0:0000000000} 00000 n `n" -f $offset)) }
[void]$builder.Append("trailer`n<< /Size $($objects.Count + 1) /Root 1 0 R >>`nstartxref`n$xrefOffset`n%%EOF")
[System.IO.File]::WriteAllText($outputFile, $builder.ToString(), [System.Text.Encoding]::ASCII)
Write-Output $outputFile
