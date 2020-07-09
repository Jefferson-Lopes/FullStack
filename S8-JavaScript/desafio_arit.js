var number1 = parseFloat(prompt('Digite um número'))

var oper = prompt('Digite a operação')

var number2 = parseFloat(prompt('Digite o segundo número'))

var resul = calculo(number1, number2, oper)

if (resul == null){
    document.write('Operação inválida')
}
else{
    document.write('O resultado é: ' + resul)
}


function calculo(number1, number2, oper){
    if (oper == 'soma'){
        return number1 + number2
    }
    else if (oper == 'sub'){
        return number1 - number2
    }

    return null
}