import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    //private negociacoes: Array<Negociacao> = [];
    // outra opção de tipar um array:
    private negociacoes: Negociacao[] = [];


    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    //lista(): ReadonlyArray<Negociacao>{
        // outra opção para digitar menos:
    public lista(): readonly Negociacao[]{
        //return [...this.negociacoes]; retornando uma lista onde não altera a original.
        return this.negociacoes;
    }

}
const negociacoes = new Negociacoes
negociacoes.lista().forEach(n =>{n.data})