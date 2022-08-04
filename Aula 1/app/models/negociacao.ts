
export class Negociacao {

    // vamos diminuir os codigos de uma maneira pratica que o TS oferece.
    //private _data: Date;
    //private _quantidade: number;
    //private _valor: number;


    // vamos refatorar tudo novamente pra ficar ainda menor.
    constructor(
        public readonly data: Date,
        public readonly quantidade: number,
        public readonly valor: number
        ) {}
   
    get volume(): number {
        return this.quantidade * this.valor
    }
}