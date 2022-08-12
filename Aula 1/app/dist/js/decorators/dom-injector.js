export function domInjector(selector) {
    return function (target, propertyKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
                console.log(`Buscando elemento no DOM com o seletor ${selector} para injetar no: ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
