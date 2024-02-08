/* Recebe um número como parâmetro, calcula a sequência até o próximo número maior do que a entrada e verifica se o número desejado pertence. */

function isNumberInFibonacciSequence(num: number): string {
  let sequence = [0, 1];
  while (sequence[sequence.length - 1] < num) {
    sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
  }
  if (!sequence.includes(num)) {
    return `${num} não pertence à sequência de Fibonacci.`;
  }

    return `${num} pertence à sequência de Fibonacci.`;
}

console.log(isNumberInFibonacciSequence(57));