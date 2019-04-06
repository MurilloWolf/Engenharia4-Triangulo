const fs = require('fs')
//caso o modulo do fs nao esteja instalado entao usar o comando no terminal
//sudo npm install -g fs

class ArquivoCSV {

    constructor( caminho = 'Engenharia4-Triangulo/tests/casosDeTestes.csv'){      
        this._caminhoDoArquivo = caminho
        
    }


    get  arrayCsv(){
        return new Promise ((resolve, reject) => {
           
            
            fs.readFile(this._caminhoDoArquivo, 'utf-8', function (err, data){
                    
                if(err)
                    reject('erro ao abrir arquivo')

                resolve(data)
                
            
            });       
        });
    }

    retornaVetorDeDados( data ){
       
        console.log(data)
        let docT = new Array()
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
        return docT
    }
}

    
    
        



module.exports = ArquivoCSV
 