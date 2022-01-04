function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
}

const pessoa2 = {
    nome: "João",
    idade: 43
}

const animal = {
    nome: "Pingo",
    idade: 8,
    raca: "Vira-lata"
}

console.log(calculaIdade.call(animal, 7));
console.log(calculaIdade.apply(pessoa2, [7]));