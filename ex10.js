/* Funcao recebe uma nota e um numero de faltas e retorna
Aprovado caso a media seja maior ou igual a 7 e o numero
de faltas menor que 10, ou Reprovado caso contrario.
*/

const consultaDoAluno = (mediaDaNota, faltas) => {
    if (mediaDaNota >= 7, faltas <10){
        console.log("Aprovado");
    } else{
        console.log("Reprovado");
    }
}
console.log(consultaDoAluno(8,10));
