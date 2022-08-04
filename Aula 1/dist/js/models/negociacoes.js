export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        //return [...this.negociacoes]; retornando uma lista onde não altera a original.
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes;
negociacoes.lista().forEach(n => { n.data; });
