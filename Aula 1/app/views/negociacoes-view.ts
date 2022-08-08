import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

    private elemento: HTMLElement;
        
    constructor(selector: string){
        this.elemento = document.querySelector(selector)
    }

    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    <tr>
                </thead>
                <tbody>
                    ${model.lista().map(item => {
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(item.data)}</td>
                                <td>${item.quantidade}</td>
                                <td>${item.valor}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            
            </table>
        `
    }


    update(model: Negociacoes): void{
        const template = this.template(model)
        console.log(template)
        this.elemento.innerHTML = template;
    }
}
