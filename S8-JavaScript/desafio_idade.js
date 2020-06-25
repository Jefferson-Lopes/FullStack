var idade = prompt('Digite sua idade: ')

if (idade < 0){
    document.write('Idade inválida')
} else if (idade < 15){
    document.write('Criança')
} else if (idade < 30){
    document.write('Jovem')
} else if (idade < 60){
    document.write('Adulto')
} else if (idade < 117){
    document.write('Idoso')
} else {
    document.write('<h2>Parabéns!</h2>Você é a pessoa mais velha do mundo.')
}