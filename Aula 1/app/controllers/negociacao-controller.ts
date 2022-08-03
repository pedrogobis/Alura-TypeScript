export class NegociacaoController{
    private inputData;
    private inputQtd;
    private inputValor;
    
    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQtd = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
    }

    adiciona(){
        console.log(this.inputData)
        console.log(this.inputQtd)
        console.log(this.inputValor)
    }

}