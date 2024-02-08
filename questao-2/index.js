/* Recebe um número como parâmetro, calcula a sequência até o próximo número maior do que a entrada e verifica se o número desejado pertence. */
function numeroPertenceFibonacci(num) {
    var sequence = [0, 1];
    while (sequence[sequence.length - 1] < num) {
        sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
    }
    if (!sequence.includes(num)) {
        return "".concat(num, " n\u00E3o pertence \u00E0 sequ\u00EAncia de Fibonacci.");
    }
    return "".concat(num, " pertence \u00E0 sequ\u00EAncia de Fibonacci.");
}
console.log(numeroPertenceFibonacci(57));
