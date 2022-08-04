export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao> = [];
        // outra opção de tipar um array:
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //lista(): ReadonlyArray<Negociacao>{
    // outra opção para digitar menos:
    lista() {
        //return [...this.negociacoes]; retornando uma lista onde não altera a original.
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes;
negociacoes.lista().forEach(n => { n.data; });
