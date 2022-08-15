import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes>{
    
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

    public paraTexto(): string{
        return JSON.stringify(this.negociacoes,null, 2)
    }

    public ehIgual(negociacoes: Negociacoes ): boolean {
        throw JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista())
    }

}
const negociacoes = new Negociacoes
negociacoes.lista().forEach(n =>{n.data})