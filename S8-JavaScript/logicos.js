/*
if (2 == 2 && 3 >= 1 || 'a' == 'b'){
    console.log('True')
} else {
    console.log('False')
}
*/

var nota = prompt('Digite a sua nota: ')
var faltas = prompt('Digite a quantidade de faltas: ')

var media = 7
var faltasMax = 15

/*
if (nota >= media && faltas <= faltasMax){
    document.write('Aprovado')
} else {
    document.write('Reprovado')
}
*/

var resul = (nota >= media && faltas <= faltasMax) ? 'Aprovado' : 'Reprovado';

document.write(resul)
