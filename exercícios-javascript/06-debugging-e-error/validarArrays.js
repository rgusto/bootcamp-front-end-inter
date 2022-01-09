function validarArrays(array, tamanho) {
    try {
        if (!array || !tamanho) throw ReferenceError('Parâmetros não enviados.');
        if (typeof array != 'object' || typeof tamanho != 'number') throw TypeError('Favor verificar o tipo dos parâmetros enviados.');
        if (array.length != tamanho) throw RangeError('Tamanho do array inválido.');
        return array;
    } catch (error) {
        if (error instanceof RangeError) {
            console.log('RangeError!');
            console.log(error.stack);
        } else if (error instanceof ReferenceError) {
            console.log('ReferenceError!');
            console.log(error.stack);
        } else if (error instanceof TypeError) {
            console.log('TypeError!');
            console.log(error.stack);
        } else {
            console.log('Outro tipo de erro!');
            console.log(error.stack);
        }
    }
}

let array = [1, 2, 3, 4, 5];
console.log(validarArrays(array, 3));
