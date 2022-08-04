export class Negociacao {
    // vamos diminuir os codigos de uma maneira pratica que o TS oferece.
    //private _data: Date;
    //private _quantidade: number;
    //private _valor: number;
    // vamos refatorar tudo novamente pra ficar ainda menor.
    // vamos usar alguns conceitos de programação defenciva
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        // criamos uma nova variavel, que recebe a data privata dentro de uma nova data.
        const data = new Date(this._data.getTime());
        return data;
    }
}
