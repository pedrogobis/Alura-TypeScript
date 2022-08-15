import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
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
const btnImporta = document.querySelector('#botao-importa');
if (btnImporta) {
    btnImporta.addEventListener('click', () => { controller.importaDados(); });
}
else {
    throw Error('Botão importa não foi encontrado');
}
