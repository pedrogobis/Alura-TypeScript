export function escape(
    target:any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const metodoOrginal = descriptor.value;
    descriptor.value = function (...args: any[]){
        let retorno = metodoOrginal.apply(this, args);
        if(typeof retorno === 'string'){
            //console.log(`@escape tem ação na classe ${this.constructor.name} para o metodo ${propertyKey}`)
            retorno = retorno.replace(/<script>[\s\S]*?<script>/,'')
        }
        return retorno ;
    }
}