var largura = parseInt(prompt('Digite a largura'))
var comprimento = parseInt(prompt('Digite o comprimento'))

var texto = "O terreno possui " + 
            calcularArea(largura, comprimento) + 
            " metros quadrados <hr>"

document.write(texto)


function calcularArea(largura, comprimento){
    var area = largura * comprimento

    return area
}