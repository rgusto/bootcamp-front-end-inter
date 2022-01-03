function alunosAprovados(array, media) {
    let array2 = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index].nota >= media) {
            array2.push(array[index]);
        }           
    }
    return array2;
}

const alunos = [
    {
        nome: "Ricardo",
        nota: 3
    },
    {
        nome: "Maria",
        nota: 7
    },
    {
        nome: "José",
        nota: 8
    },
    {
        nome: "João",
        nota: 4
    },
    {
        nome: "Alberto",
        nota: 10
    }
];

console.log(alunosAprovados(alunos,7));