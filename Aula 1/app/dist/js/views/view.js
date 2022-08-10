export class View {
    constructor(selector) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${selector} não existe, verificar com desenvolvedor`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
