const cliente = {
    cod: 17563,
    nome: 'Beatriz',
    vip: true,
    end: {
        logradouro: 'Rua 1',
        n: 123,
        complemento: 'Apto 110, Bloco D',
        ref: [
            'Mercado Central',
            'Cinema',
        ]
    },
    nomeFilhos:
        ['Ana', 'Bruno']
};
console.log(cliente.cod);
console.log(cliente.nome);
console.log(cliente.vip);
console.log(cliente.end.logradouro);
console.log(cliente.end.n);
console.log(cliente.end.complemento);
console.log(cliente.end.ref);
console.log(cliente.nomeFilhos);