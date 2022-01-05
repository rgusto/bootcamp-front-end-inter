function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    })
}

const numeros = [1,3,5,7,9];
console.log(mapSemThis(numeros));