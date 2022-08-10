import { inspect } from "../decorators/inspect.js";
import { LogarTempoDeExecucacao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View <T>{
    protected elemento: HTMLElement;
    //private escapar: false;

    constructor(selector: string){
        const elemento = document.querySelector(selector);
        if(elemento){
            this.elemento = elemento as HTMLElement
        }else{
             throw Error(`Seletor ${selector} não existe, verificar com desenvolvedor`)
        }
        
       // if(escapar){
         //   escapar = escapar;
        //}
        
    }

    protected abstract template(model: T): string;
    
    
    public update(model: T): void{
        
        let template = this.template(model)

        this.elemento.innerHTML = template;
        
        
    }
}