export class View {
    constructor(selector, escapar) {
        this.elemento = document.querySelector(selector);
        if (escapar) {
            escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
