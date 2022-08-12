export function domInjector(selector: string){
    return function(target: any, propertyKey: string){
       
        let elemento: HTMLElement ;
        const getter = function(){
            if(!elemento){
                elemento = <HTMLElement>document.querySelector(selector)
                console.log(`Buscando elemento no DOM com o seletor ${selector} para injetar no: ${propertyKey}`)

            }
            return elemento
            //return elemento
        }


        Object.defineProperty(
            target,
            propertyKey,
            { get: getter}
        );

    }
}