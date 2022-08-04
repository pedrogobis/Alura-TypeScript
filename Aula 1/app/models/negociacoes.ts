import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];


    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): ReadonlyArray<Negociacao>{
        //return [...this.negociacoes]; retornando uma lista onde não altera a original.
        return this.negociacoes;
    }

}
const negociacoes = new Negociacoes
negociacoes.lista().forEach(n =>{n.data})