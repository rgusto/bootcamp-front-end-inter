function filtrarPares(arr) {
    return arr.filter(function(item) {
        return item % 2 === 0;
    });
}

const array = [1,56,35,48,65,81,83,92];
console.log(filtrarPares(array));