import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { LogarTempoDeExecucacao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { mensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";



export class NegociacaoController{
    @domInjector('#data')
    private inputData: HTMLInputElement ;
    @domInjector('#quantidade')
    private inputQtd: HTMLInputElement ;
    @domInjector('#valor')
    private inputValor: HTMLInputElement ;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new mensagemView('#mensagemView');
    private negociacaoService =  new NegociacoesService();
    
    constructor(){
        //this.inputData = document.querySelector('#data') as HTMLInputElement
        //this.inputQtd = document.querySelector('#quantidade') as HTMLInputElement
        //this.inputValor = document.querySelector('#valor') as HTMLInputElement
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect
    @LogarTempoDeExecucacao()
    public adiciona(): void { // tipar até os retornos
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQtd.value,
            this.inputValor.value
        )
        if(!this.ehDiaUtil(negociacao.data) ){  // a logica é: é diferente de dia não uti? então manda essa msg, se não segue a vida.
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas')
            return;
        
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    

    public importaDados():void{
        //fetch('http://localhost:8080/dados') // pega os dados
          //  .then(res => res.json()) // converte o que receber em objto json
            //.then((dados: negociacoesDoDia[]) =>{ // converte em um array de varios tipos
              //  return dados.map(dadoDeHoje => { // converte em um array de negociacoes
                //    return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante)
                //})
            //})
            this.negociacaoService.obterNegociacoes()
            .then(negociacoesDeHoje =>{ // vai pegar as negociacoes e adicionar na tabela 
                for(let negociacao of negociacoesDeHoje){
                    this.negociacoes.adiciona(negociacao)
                }
                this.negociacoesView.update(this.negociacoes) // atualiza a tabela
            }) 
    }

    private ehDiaUtil(data: Date){
        return data.getDay()> DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
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