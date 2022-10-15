/* Funcao recebe 3 notas e retorna as strings sim ou nao,
indicando se a media simples entre as 3 notas, e igual ou
maior que 7.
*/

const retornoDeAluno = (nota1, nota2, nota3) => {
    const media = (nota1 + nota2 + nota3)/3;

    if(media >= 7) {
        console.log("SIM");
    } else {
        console.log("NÃO");
    }
}

console.log(retornoDeAluno(9,9,7));