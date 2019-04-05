const Triangulo = require('../models/Triangulo')

exports.modeloDeTriangulo = function (ladoA,ladoB,ladoC) {

    var tri = new Triangulo(1,1,1)

    return tri.tipoDeTriangulo()
  
}