/* Funcao que retorna Aprovado caso a nota passada seja maior
 ou igual a 7, Prova Final caso seja maior ou igual a 5, porem,
 menor que 7 ou Reprovado caso contrario.
*/

const informacoesDoAluno = (nota) => {
    if(nota >= 7){
        console.log("Aprovado");
    } else if (nota >=5){
        console.log("Prova final");
    } else {
        console.log("Reprovado");
    }
}
console.log(informacoesDoAluno(9));
