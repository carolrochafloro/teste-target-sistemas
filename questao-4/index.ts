
interface EstadoFaturamento {
  estado: string;
  faturamento: number;
}

const faturamentos: EstadoFaturamento[] = [
  { estado: 'SP', faturamento: 67836.43 },
  { estado: 'RJ', faturamento: 36678.66 },
  { estado: 'MG', faturamento: 29229.88 },
  { estado: 'ES', faturamento: 27165.48 },
  { estado: 'Outros', faturamento: 19849.53 },
];

function calcularPercentualRepresentacao(faturamentos: EstadoFaturamento[]): string {
  let totalFaturamento = 0;
  const percentuais: Record<string, number> = {}; 

  faturamentos.forEach((estado) => {
      totalFaturamento += estado.faturamento;
  });

  faturamentos.forEach((estado) => {
      const percentual = (estado.faturamento / totalFaturamento) * 100;
      percentuais[estado.estado] = percentual;
  });

  let resultadoString = 'Percentuais:\n';

  faturamentos.forEach((estado) => {
      resultadoString += `${estado.estado}: ${percentuais[estado.estado].toFixed(2)}%\n`;
  });

  return resultadoString;
}

const resultadoFinal = calcularPercentualRepresentacao(faturamentos);
console.log(resultadoFinal);

