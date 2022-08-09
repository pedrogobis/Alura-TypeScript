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
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g; // criamos uma expressão regular que vai procurar todas as datas com o hifem
        const date = new Date(dataString.replace(exp, ',')); // aqui falamos o date vai receber a data do inputdatavalue, só que com o replace recebendo a regex e subtituindo pela ',' 
        const qtd = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, qtd, valor);
    }
}
