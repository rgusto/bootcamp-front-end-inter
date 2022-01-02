const VALOR_MAXIMO = 20;
const VALOR_MINIMO = 10;

function compararNumeros(x, y) {

    if (!x || !y) return 'números inválidos.';

    let msg = `Os números ${x} e ${y}`;
    if (x !== y) {
        msg = msg + ' NÃO';
    }
    msg = msg + ` são iguais.`;

    return msg + compararValorMinimo(x, y) + compararValorMaximo(x, y);
}

function compararValorMinimo(x, y) {
    const SOMA = x + y;
    let msg = ` e `;

    if (SOMA > VALOR_MINIMO) {
        msg = msg + `maior que `;
    } else if (SOMA === VALOR_MINIMO) {
        msg = msg + `igual a `;
    } else {
        msg = msg + `menor que `;
    }
    msg = msg + VALOR_MINIMO + `.`;

    return msg;
}

function compararValorMaximo(x, y) {
    const SOMA = x + y;
    let msg = ` Sua soma é ${SOMA}, que é `;

    if (SOMA > VALOR_MAXIMO) {
        msg = msg + `maior que `;
    } else if (SOMA === VALOR_MAXIMO) {
        msg = msg + `igual a `;
    } else {
        msg = msg + `menor que `;
    }
    msg = msg + VALOR_MAXIMO;
    return msg;
}

console.log(compararNumeros(5, 7));