class ContaBancaria {

    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return _this.saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            throw new Error("Saldo insuficiente");
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

}

class ContaCorrente extends ContaBancaria {

    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }

}


class ContaPoupanca extends ContaBancaria {

    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';
    }

}


class ContaUniversitaria extends ContaBancaria {

    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if(valor > 500) {
            throw new Error('Operação negada.');
        }
        if (valor > this._saldo) {
            throw new Error("Saldo insuficiente");
        }
        this._saldo = this._saldo - valor;
    }

}