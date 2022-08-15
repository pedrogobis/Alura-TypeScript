export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const qtd = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, qtd, valor);
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    paraTexto() {
        return `
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor}
        `;
    }
    ehIgual(negociao) {
        return this.data.getDate() === negociao.data.getDate()
            && this.data.getMonth() === negociao.data.getMonth()
            && this.data.getFullYear() === negociao.data.getFullYear();
    }
}
