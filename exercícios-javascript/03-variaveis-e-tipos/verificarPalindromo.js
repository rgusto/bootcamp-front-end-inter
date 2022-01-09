function verificarPalindromo(texto) {
    
    if (!texto) return "Dados inválidos.";

    return texto.split("").reverse().join("") == texto;

}

function verificarPalindromo2(texto) {
    
    if (!texto) return "Dados inválidos.";

    for (let index = 0; index < texto.length / 2; index++) {
        if (texto[index] !== texto[texto.length - 1 - index]) {
            return false;
        }                
    }

    return true;

}

console.log(verificarPalindromo("ANA"));
console.log(verificarPalindromo2("OVO"));