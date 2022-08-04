import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQtd = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegocicao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    criaNegocicao() {
        const exp = /-/g; // criamos uma expressão regular que vai procurar todas as datas com o hifem
        const date = new Date(this.inputData.value.replace(exp, ',')); // aqui falamos o date vai receber a data do inputdatavalue, só que com o replace recebendo a regex e subtituindo pela ',' 
        const qtd = parseInt(this.inputQtd.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, qtd, valor);
    }
    limparFormulario() {
        this.inputData.value = '',
            this.inputQtd.value = '',
            this.inputValor.value = '',
            this.inputData.focus();
    }
}
