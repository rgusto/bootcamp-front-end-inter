function somarNumeros(arr) {
    return arr.reduce(function (prev, curr) {
        return prev + curr;
    });
}

const arr = [1, 2,3,4];
console.log(somarNumeros(arr));