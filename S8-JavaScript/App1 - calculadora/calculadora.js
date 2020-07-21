function calcular(tipo, valor) {
    if (tipo === 'acao'){

        if (valor === 'c'){
            document.getElementById('resultado').value = ''
        }

        else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }

        else if (valor === '='){
            var campo = document.getElementById('resultado').value
            console.log(campo)
            console.log(eval(campo))
            document.getElementById('resultado').value = eval(campo)
        }


    }
    else if (tipo === 'valor'){
        document.getElementById('resultado').value += valor
    }
}