export function LogarTempoDeExecucacao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milesegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Tempo de execução do metodo: ${propertyKey}, tempo de execução:${(t2 - t1) / divisor} ${unidade}.`);
            retorno;
        };
        return descriptor;
    };
}
