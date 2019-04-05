const triangulo_controller = require('../controllers/ctrTestes')
const ArquvioCsv = require ('../public/lerArquivoCSV')

var arquivo = new ArquvioCsv()
var documento =  arquivo.arrayCsv

//console.log(documento)
//console.log(triangulo_controller.modeloDeTriangulo(1,1,1))