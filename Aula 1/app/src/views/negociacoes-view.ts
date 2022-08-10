import { escape } from "../decorators/escape.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{
    
    @escape
    protected template(model: Negociacoes): string {
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
                                <td>${this.formatar(item.data)}</td>
                                <td>${item.quantidade}</td>
                                <td>${item.valor}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            
            </table>
        `
    }


    private formatar(data: Date): string{ // retirando o codigo do template, deixando tudo o mais clean possivel.
        return new Intl.DateTimeFormat().format(data)
    }


}
