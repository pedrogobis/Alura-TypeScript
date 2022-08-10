export function LogarTempoDeExecucacao(emSegundos: boolean= false){
    return function(
        target: any, // relevante cada caso ele retorna uma coisa. função ou prototipo
        propertyKey: string, // retorna o nome do metodo que foi decorado
        descriptor: PropertyDescriptor // sabe de tudo sobre o metodo que queremos executar
    )
    {
        const metodoOriginal = descriptor.value; // vai pegar o metodo que decorarmos, e guardar nesta variavel
        descriptor.value = function(...args: any[]){
            let divisor = 1;
            let unidade = 'milesegundos';

            if(emSegundos){
                divisor = 1000;
                unidade = 'segundos'
            }

            const t1  = performance.now();
            // iremos executar o metodo decorado aqui dentro. 
            
            const retorno = metodoOriginal.apply(this, args); // colocamos o apply pra aplicar o this aonde for chamada

            const t2  = performance.now();

            console.log(`Tempo de execução do metodo: ${propertyKey}, tempo de execução:${(t2 - t1)/divisor} ${unidade}.`);

            retorno;
        };
        return descriptor;
    }
}