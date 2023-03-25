const objeto1 = {
    impuesto1: 12,
    impuesto2: 16,
    impuesto3: 20,
};


const soloPropuedades = Object.keys(objeto1)
const soloPropuedades2 = Object.values(objeto1)
const soloPropuedades3 = Object.entries(objeto1)

console.log(soloPropuedades);
console.log(soloPropuedades2);
console.log(soloPropuedades3);

const impuestoTotales = soloPropuedades2.reduce((valorInicial, valorAcomulado) => valorAcomulado + valorInicial)

console.log(impuestoTotales);

