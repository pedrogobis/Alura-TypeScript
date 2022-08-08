import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { mensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new mensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQtd = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegocicao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
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
