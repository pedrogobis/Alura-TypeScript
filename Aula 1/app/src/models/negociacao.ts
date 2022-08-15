import { Modelo } from "../interfaces/modelo.js";


export class Negociacao implements Modelo <Negociacao>{

    // vamos diminuir os codigos de uma maneira pratica que o TS oferece.
    //private _data: Date;
    //private _quantidade: number;
    //private _valor: number;


    // vamos refatorar tudo novamente pra ficar ainda menor.
    // vamos usar alguns conceitos de programação defenciva


    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g; // criamos uma expressão regular que vai procurar todas as datas com o hifem
        const date = new Date(dataString.replace(exp, ',')) // aqui falamos o date vai receber a data do inputdatavalue, só que com o replace recebendo a regex e subtituindo pela ',' 
        const qtd = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(date, qtd, valor);
    }
    get volume(): number {
        return this.quantidade * this.valor
    }

    get data(): Date {
        // criamos uma nova variavel, que recebe a data privata dentro de uma nova data.
        const data = new Date(this._data.getTime())
        return data;
    }

    public paraTexto(): string {
        return `
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor}
        `
    }

    public ehIgual(negociao: Negociacao): boolean{
        return this.data.getDate() === negociao.data.getDate()
        && this.data.getMonth() === negociao.data.getMonth()
        && this.data.getFullYear() === negociao.data.getFullYear()
    }

}