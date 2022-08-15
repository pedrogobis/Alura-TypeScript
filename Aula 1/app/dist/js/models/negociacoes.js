export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    ehIgual(negociacoes) {
        throw JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}
const negociacoes = new Negociacoes;
negociacoes.lista().forEach(n => { n.data; });
