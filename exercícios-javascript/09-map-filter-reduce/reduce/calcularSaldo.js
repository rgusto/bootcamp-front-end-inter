const lista = [
    {
        name: 'toalha',
        price: 15
    },
    {
        name: 'sabonete',
        price: 2
    },
    {
        name: 'shampoo',
        price: 20
    }
]

function calcularSaldo(saldoDisponivel, arr) {
    return arr.reduce(function (prev, curr) {
        return prev - curr.price;
    }, saldoDisponivel);
}

console.log(calcularSaldo(100,lista));