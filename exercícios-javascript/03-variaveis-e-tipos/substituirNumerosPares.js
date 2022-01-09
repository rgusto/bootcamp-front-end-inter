function substituirNumerosPares(array) {
    if (!array || !array.length) return [];

    for (let index = 0; index < array.length; index++) {
       if (array[index] % 2 === 0) {
           array[index] = 0;
       } 
    }
    return array;
}

let arr = [1,3,4,6,80,33,23,90];
console.log(substituirNumerosPares(arr));