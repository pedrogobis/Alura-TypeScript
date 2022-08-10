export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOrginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`--- Método ${propertyKey}`)
        console.log(`---- Parametros ${JSON.stringify(args)}`)

        const retorno = metodoOrginal.apply(this, args)
        console.log(`----- Retorno ${JSON.stringify(retorno)}`)
        return retorno
    }

    return descriptor;
}
