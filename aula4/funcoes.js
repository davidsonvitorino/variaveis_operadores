/*function incrementoDeJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros /100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementoDeJuros(100, 10));
console.log(incrementoDeJuros(100, 15));
console.log(incrementoDeJuros(100, 17));
console.log(incrementoDeJuros(100, 35));
*/

//Utilizando função no codigo

function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if (imc < 18.5){
        return('Você está Abaixo do peso.')
    }
    else if (imc >= 18.5 && imc <= 25){
        return('Você está no peso Ideal')
    }
    else if (imc > 25 && imc <= 30){
        return('Você está acima do peso ideal')
    }
    else if (imc >= 30 && imc <= 40){
        return('Você esta com Obesidade Média')
    }
    else{
        return('Você está com Obesidade Mórbida')
    }
}


function main(){
    const peso = 78;
    const altura = 1.70
    const imc = calcularImc(peso, altura);
    console.log(imc.toFixed(2) + 'Kg');
    console.log(classificarImc(imc));
}

main();
