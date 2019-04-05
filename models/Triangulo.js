class Triangulo {
    constructor(lado1, lado2, lado3) {
        this._lado1 = lado1;
        this._lado2 = lado2;
        this._lado3 = lado3;
    }
    dadosValidos() {
        return this._lado1 > 0 && this._lado2 > 0 && this._lado3 > 0;
    }
    ladosValidos() {
        var resultadoBC, resultadoAC, resultadoAB;
        resultadoAB = resultadoAC = resultadoBC = false;
       
        if (Math.abs(this._lado2 - this._lado3) <= this._lado1 && this._lado2 + this._lado3 >= this._lado1)
            resultadoAB = true;
       
        if (Math.abs(this._lado1 - this._lado3) <= this._lado2 && this._lado1 + this._lado3 >= this._lado2)
            resultadoAC = true;
       
        if (Math.abs(this._lado1 - this._lado2) <= this._lado3 && this._lado1 + this._lado2 >= this._lado3)
            resultadoBC = true;
       
            return resultadoAB || resultadoAC || resultadoBC;
    }
    verificaTipoTriangulo() {
        if (this._lado1 == this._lado2 && this._lado2 == this._lado3 && this._lado3 == this._lado2)
            return "equilatero";
        else if (this._lado1 == this._lado2 || this._lado2 == this._lado3 || this._lado3 == this._lado1)
            return "isoceles";
        else
            return "escaleno";
    }
    tipoDeTriangulo() {
        if (this.dadosValidos())
            if (this.ladosValidos())
                return this.verificaTipoTriangulo();
        return 'erro';
    }
}

module.exports = Triangulo




