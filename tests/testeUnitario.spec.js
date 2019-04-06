const assert = require('assert')


//const Triangulo = require('../models/Triangulo')
//const triangulo_controller = require('../controllers/ctrTestes')
//const docT = require('../public/lerArquivoTexto')
// npm install--sav-dev mocha
//
//comando para ignorar a pasta do node_modules
//ir no PACKAGE.JSON
//localizar o trecho 
//
//"scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1"
//   },
//
//substituir por 
//"scripts": {
//   "test": "./node_modules/.bin/mocha './!(node_modules)/**/*.spec.js'"
//   },
//
//Para realizar o teste usar o comando : npm run test 
//Ele ira buscar na pasta um arquivo com o extensão .spec.js para executar


describe ('Teste 1', ()=>{
    it('Primeiro Teste', ()=>{
        
          const a = 1
          const b = 2
          const c = a+b
          assert.equal(c,3)
    })  
      
  })

/*
describe ('Triangulo.js', () =>{

    var contadorDeTeste = 0
    var numeroDoTeste = 0
    const numeroDeTestesUnitarios = 0

    //caso de teste unitário, o arquivo CSV deve conter apenas os testes de unidade;
    while(numeroDoTeste < numeroDeTestesUnitarios){

        //inicia o teste
        it ('Valores Validos '+ contadorDeTeste++, (done) => {
        
            //cria o triangulo
            let tri = new Triangulo(docT[numeroDoTeste], docT[++numeroDoTeste], docT[++numeroDoTeste])

            //realiza o teste vendo se os 3 lados (lado1,lado2,lado3) possuem um valor valido ( lado >0 )
            //compara o resultado da funcao dadosValidos() com o resultado esperado na tabela CSV
            assert.equal(tri.dadosValidos(),docT[++numeroDoTeste])

            
            
        })

    }


    contadorDeTeste = 0
    while(numeroDoTeste < docT.lenght){

        it('Teste de Integraçao '+ contadorDeTeste++, (done) =>{
            
            let resultado = triangulo_controller.modeloDeTriangulo(docT[numeroDeTeste++],docT[numeroDoTeste++],docT[numeroDoTeste++])
            
            assert.equal(resultado, docT[numeroDoTeste++])

        })
    }




}) 

*/