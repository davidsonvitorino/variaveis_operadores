const precoGasolina = 5.29;
const precoEtanol = 3.39;
const distanciaKm = 879;

const mediaKmGasolina = 17;
const mediaKmEtanol = 10;


const gastoMedioGasolina = (distanciaKm * precoGasolina)/ mediaKmGasolina;
const gastoMedioEtanol = (distanciaKm * precoEtanol)/ mediaKmEtanol;

console.log(gastoMedioGasolina.toFixed(2));
console.log(gastoMedioEtanol.toFixed(2));

if (gastoMedioEtanol < gastoMedioGasolina){
    console.log("O gasto com Etanol é menor R$" + gastoMedioGasolina.toFixed(2))
}
else{
    console.log("O gasto com gasolina é menor R$" + gastoMedioEtanol.toFixed(2))
}