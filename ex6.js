/* Retornar Maior de Idade caso a idade passada seja maior
que 17 ou Menor de Idade caso contrário.
*/

const maiorDeIdade = (idade) => {
    if (idade >= 17) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}
console.log(maiorDeIdade(17));

