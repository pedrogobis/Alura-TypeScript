import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const btnImporta = document.querySelector('#botao-importa');
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação, Verifique se o formulario existe.');
}
if (btnImporta) {
    form.addEventListener('click', () => controller.importaDados());
}
else {
    throw Error('Botão importa não foi encontrado');
}
