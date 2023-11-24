const xbox = 100;
const pagamento = 4;

if (pagamento === 1){
    console.log(xbox - ((xbox * 10) / 100));
}
else if (pagamento === 2){
    console.log(xbox - ((xbox * 15) / 100));
}
else if (pagamento === 3){
    console.log(xbox);
}
else{
    console.log(xbox + (xbox * 10) / 100);
}
