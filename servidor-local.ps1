$raiz = (Get-Location).Path
$listener = [Net.Sockets.TcpListener]::new([Net.IPAddress]::Any, 8080)
$listener.Start()
Write-Host "Servidor local ativo em http://localhost:8080/"
Write-Host "Pressione Ctrl+C para encerrar."
try {
  while ($true) {
    $cliente = $listener.AcceptTcpClient()
    $stream = $cliente.GetStream()
    $reader = [IO.StreamReader]::new($stream)
    $linha = $reader.ReadLine()
    while ($reader.ReadLine() -ne '') { }
    $caminho = ($linha -split ' ')[1].TrimStart('/').Replace('/', '\')
    if ([string]::IsNullOrWhiteSpace($caminho)) { $caminho = "index.html" }
    $arquivo = Join-Path $raiz $caminho
    if (Test-Path -LiteralPath $arquivo -PathType Leaf) {
      $conteudo = [IO.File]::ReadAllBytes($arquivo)
      $tipo = switch ([IO.Path]::GetExtension($arquivo).ToLower()) {
        ".html" { "text/html; charset=utf-8"; break }
        ".css" { "text/css; charset=utf-8"; break }
        ".js" { "application/javascript; charset=utf-8"; break }
        ".json" { "application/json; charset=utf-8"; break }
        default { "application/octet-stream" }
      }
      $status = "200 OK"
    } else {
      $conteudo = [Text.Encoding]::UTF8.GetBytes("Arquivo não encontrado")
      $tipo = "text/plain; charset=utf-8"
      $status = "404 Not Found"
    }
    $cabecalho = "HTTP/1.1 $status`r`nContent-Type: $tipo`r`nContent-Length: $($conteudo.Length)`r`nConnection: close`r`n`r`n"
    $bytes = [Text.Encoding]::ASCII.GetBytes($cabecalho)
    $stream.Write($bytes, 0, $bytes.Length)
    $stream.Write($conteudo, 0, $conteudo.Length)
    $stream.Close(); $cliente.Close()
  }
} finally { $listener.Stop() }
