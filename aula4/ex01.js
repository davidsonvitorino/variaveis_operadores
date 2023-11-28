function escrevaMeuNome(nome){
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade){
    if(idade < 18){
        console.log('Você é Menor de Idade')
    }
    else{
        console.log(escrevaMeuNome('Davidson') + ' e sou Maior de Idade');
    }
}
verificarIdade(18);