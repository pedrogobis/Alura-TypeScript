import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { mensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";



export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQtd: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new mensagemView('#mensagemView')
    
    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQtd = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void { // tipar até os retornos
        const negociacao = this.criaNegocicao();
        if(!this.ehDiaUtil(negociacao.data) ){  // a logica é: é diferente de dia não uti? então manda essa msg, se não segue a vida.
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas')
            return;
        
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    
    private ehDiaUtil(data: Date){
        return data.getDay()> DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }

    private criaNegocicao() : Negociacao {
        const exp = /-/g; // criamos uma expressão regular que vai procurar todas as datas com o hifem
        const date = new Date(this.inputData.value.replace(exp, ',')) // aqui falamos o date vai receber a data do inputdatavalue, só que com o replace recebendo a regex e subtituindo pela ',' 
        const qtd = parseInt(this.inputQtd.value);
        const valor = parseFloat(this.inputValor.value)
        
        return new Negociacao(date, qtd, valor);
    }

    private limparFormulario():void{
        this.inputData.value = '',
        this.inputQtd.value = '',
        this.inputValor.value = '',
        this.inputData.focus();

    }

    private atualizaView(): void{ //todo metodo de atualização deve ficar aqui dentro.
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

}