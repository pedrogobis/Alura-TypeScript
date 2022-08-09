export abstract class View <T>{
    protected elemento: HTMLElement;

    constructor(selector: string){
        this.elemento = document.querySelector(selector)
    }

    protected abstract template(model: T): string;
        

    public update(model: T): void{
        const template = this.template(model)
        this.elemento.innerHTML = template;
    }
}