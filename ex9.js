/* Funcao recebe um preco e um booleano indicando se ja esta 
com desconto ou nao. Se o preco for maior que 100 e nao
estiver com desconto, a funcao deve retornar Quero desconto.
Caso contrario, deve retornar Negocio Fechado.
*/

const pecoDesconto = (preco, estaComDesconto) => {
    if (preco > 100 && estaComDesconto === false){
    console.log("Quero desconto"); 
    } else {
        console.log("Negócio fechado!");
    }
}

console.log(pecoDesconto(120));
