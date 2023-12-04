//Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada número par encontrado.

const numeros = [4, 9, 56, 57, 3, 7, 100, 77];

for (let i = 0; i <= numeros.length; i++) {
    const numero = numeros[i];

    if(numero % 2 === 0){
        console.log(numero)
    }
}