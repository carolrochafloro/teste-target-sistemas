var dados = require('./dados.json');
function calcularFaturamento(dados) {
    var diasComFaturamento = dados.filter(function (item) { return item.valor > 0; });
    /* Implementei uma verificação utilizando o conceito de early return para o caso de não haverem dias com faturamento no período informado. */
    if (diasComFaturamento.length === 0) {
        return "Não existem dias com faturamento";
    }
    var menorFaturamento = Math.min.apply(Math, diasComFaturamento.map(function (item) { return item.valor; }));
    var maiorFaturamento = Math.max.apply(Math, diasComFaturamento.map(function (item) { return item.valor; }));
    var somaFaturamento = diasComFaturamento.reduce(function (acc, item) { return acc + item.valor; }, 0);
    var mediaMensal = somaFaturamento / diasComFaturamento.length;
    var diasAcimaDaMedia = diasComFaturamento.filter(function (item) { return item.valor > mediaMensal; }).length;
    return "Menor faturamento: R$".concat(menorFaturamento.toFixed(2), "\nMaior faturamento: R$").concat(maiorFaturamento.toFixed(2), "\nDias acima da m\u00E9dia: ").concat(diasAcimaDaMedia);
}
var resultado = calcularFaturamento(dados);
console.log(resultado);
