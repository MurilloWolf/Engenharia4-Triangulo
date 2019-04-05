Engenharia4-Triangulo

Trabalho de Engenharia 4 sobre teste de Software

A classe Triangulo (model) faz a verificacao se os lados de um triangulo sao validos e retorna o seu tipo(Equilatero, Escaleno, Isoceles)

Na pasta Public está a classe js que faz a leitura do arquivo CSV e retorna os dados do arquivo em forma de Array
Na pasta View tem um arquivo simulacao.js, que faz a chamada da funcao que retornaria as informacoes do arquivo texto :
    --Problema, não consigo passar o array preenchido da classe que faz a leitura do arquivo para a variavel que esta dentro da view

Tentei realizar o procedimento com uma Promise porem sem resultado

Na classe leArquivoCSV existe a chamada da funcao que le o arquivo  
    fs.readFile(this._caminhoDoArquivo, 'utf-8', function (err, data){'
    
    O problema é que quando ele sai dessa função o valor é perdido 
    


Estrutura do Tabalho
|-Controllers
|--ctrTestes.js
|
|-Models
|--Triangulo.js
|
|-Public
|--lerArquivoCSV.js
|
|-Tests
|--casosDeTeste.csv
|--testeUnitario.spec.js
|
|-View
|--simulacao.js
