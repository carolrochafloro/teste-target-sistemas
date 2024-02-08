const dados: any[] = require('./dados.json');

interface Faturamento {
    dia: number;
    valor: number;
}

function calcularFaturamento(dados: Faturamento[]): string {
    const diasComFaturamento = dados.filter(item => item.valor > 0);

    /* Implementei uma verificação utilizando o conceito de early return para o caso de não haverem dias com faturamento no período informado. */

    if (diasComFaturamento.length === 0) {
        return "Não existem dias com faturamento";
    }

    const menorFaturamento = Math.min(...diasComFaturamento.map(item => item.valor));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(item => item.valor));

    const somaFaturamento = diasComFaturamento.reduce((acc, item) => acc + item.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(item => item.valor > mediaMensal).length;

    return `Menor faturamento: R$${menorFaturamento.toFixed(2)}\nMaior faturamento: R$${maiorFaturamento.toFixed(2)}\nDias acima da média: ${diasAcimaDaMedia}`;
}

const resultado = calcularFaturamento(dados);
console.log(resultado);
