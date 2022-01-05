const teste1 = {
    value: 4
};

const teste2 = {
    value: 5
};

function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const numeros = [1, 2];

console.log(mapComThis(numeros, teste1));
console.log(mapComThis(numeros, teste2));