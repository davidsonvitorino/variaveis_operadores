const peso = 78;
const altura = 1.70
const IMC = peso / Math.pow(altura, 2);


console.log(IMC.toFixed(2));

if (IMC < 18.5){
    console.log('Você está Abaixo do peso.')
}
else if (IMC >= 18.5 && IMC <= 25){
    console.log('Você está no peso Ideal')
}
else if (IMC > 25 && IMC <= 30){
    console.log('Você está acima do peso ideal')
}
else if (IMC >= 30 && IMC <= 40){
    console.log('Você esta com Obesidade Média')
}
else{
    console.log('Você está com Obesidade Mórbida')
}