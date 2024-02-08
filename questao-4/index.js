var faturamentos = [
    { estado: 'SP', faturamento: 67836.43 },
    { estado: 'RJ', faturamento: 36678.66 },
    { estado: 'MG', faturamento: 29229.88 },
    { estado: 'ES', faturamento: 27165.48 },
    { estado: 'Outros', faturamento: 19849.53 },
];
function calcularPercentualRepresentacao(faturamentos) {
    var totalFaturamento = 0;
    var percentuais = {};
    faturamentos.forEach(function (estado) {
        totalFaturamento += estado.faturamento;
    });
    faturamentos.forEach(function (estado) {
        var percentual = (estado.faturamento / totalFaturamento) * 100;
        percentuais[estado.estado] = percentual;
    });
    var resultadoString = 'Percentuais:\n';
    faturamentos.forEach(function (estado) {
        resultadoString += "".concat(estado.estado, ": ").concat(percentuais[estado.estado].toFixed(2), "%\n");
    });
    return resultadoString;
}
var resultadoFinal = calcularPercentualRepresentacao(faturamentos);
console.log(resultadoFinal);
