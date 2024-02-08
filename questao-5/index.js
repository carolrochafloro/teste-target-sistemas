function inverterString(original) {
    var resultado = '';
    /* A string é um array de caracteres. O loop percorre cada índice, começando do último para o primeiro e inserindo o caracter correspondente em uma nova string na ordem invertida. Como length fornece o tamanho do array, mas o índice começa em 0, i é inicializada como length - 1 para garantir que comece do último índice e vá até o primeiro. */
    for (var i = original.length - 1; i >= 0; i--) {
        resultado += original[i];
    }
    return resultado;
}
var inverter = "Exemplo";
var stringInvertida = inverterString(inverter);
console.log(stringInvertida);
