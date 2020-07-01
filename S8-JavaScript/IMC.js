var nome = prompt('Digite o seu nome')
var altura = prompt('Digite sua altura em cm')
var peso = prompt('Digite seu peso')

altura = parseFloat(altura) / 100
peso = parseFloat(peso)

var M = peso / (altura * altura)

var classificacao

if (M < 16){
    classificacao = 'Baixo peso muito grave'
}else if (M < 17){
    classificacao = 'Baixo peso grave'
}else if (M < 18.5){
    classificacao = 'Baixo peso'
}else if (M < 25){
    classificacao = 'Peso normal'
}else if (M < 30){
    classificacao = 'Sobrepeso'
}else if (M < 35){
    classificacao = 'Obesidade grau I'
}else if (M < 40){
    classificacao = 'Obesidade grau II'
}else{
    classificacao = 'Obesidade grau III'
}

var texto = nome + ' possui índice de massa corporal igual a '
+ M + ', sendo classificado como: ' + classificacao + '. <hr>' 

document.write(texto)
