const triangulo_controller = require('../controllers/ctrTestes')
const ArquvioCsv = require ('../public/lerArquivoCSV')

let conteudoDoArquivo = new ArquvioCsv().arrayCsv

conteudoDoArquivo.then((data)=>{

    //separa as informações do arquivo
    let docT = new Array()
    var cont = 0


    var fileArr = data.split('\n')
    var cont = 0
    for (var i=0; i<fileArr.length; i++) {         

        var fileLine = fileArr[i].split(',')

        for (var j=0; j<fileLine.length; j++) {
            //se tiver uma linha valida
            if(fileLine[j].trim()!='')
            //adiciona no array
            docT[cont++] = fileLine[j];            
            
        }
                
    }
    
    console.table(docT)

}).catch((err)=>{

})

//console.log(documento)
//console.log(triangulo_controller.modeloDeTriangulo(1,1,1))