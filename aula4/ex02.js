function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return valor + ((valor * juros) /100);
}



const xbox = 100;
const pagamento = 4;

if (pagamento === 1){
    console.log(aplicarDesconto(xbox, 10));
}
else if (pagamento === 2){
    console.log(aplicarDesconto(xbox, 15));
}
else if (pagamento === 3){
    console.log(xbox);
}
else{
    console.log(aplicarJuros(xbox, 17));
}