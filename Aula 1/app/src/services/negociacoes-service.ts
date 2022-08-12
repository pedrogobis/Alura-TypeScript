import { negociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {


    public obterNegociacoes(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados') // pega os dados
            .then(res => res.json()) // converte o que receber em objto json
            .then((dados: negociacoesDoDia[]) => { // converte em um array de varios tipos
                return dados.map(dadoDeHoje => { // converte em um array de negociacoes
                    return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante)
                })
            })
            
    }
}