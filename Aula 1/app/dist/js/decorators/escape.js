export function escape(target, propertyKey, descriptor) {
    const metodoOrginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOrginal.apply(this, args);
        if (typeof retorno === 'string') {
            retorno = retorno.replace(/<script>[\s\S]*?<script>/, '');
        }
        return retorno;
    };
}
