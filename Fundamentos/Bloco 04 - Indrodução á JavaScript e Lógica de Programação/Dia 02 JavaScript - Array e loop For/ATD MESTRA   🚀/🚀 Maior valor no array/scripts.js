/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; */

// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1
 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);


/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2222, 35, 27]; */

/* let max = Math.max(...numbers)

console.log(max); */

/* O Math.max ele descobre o maior numero dentro de um array, mas ele não é recomendado para arrays muito grandes. tem uma forma mais concreta para descobrir o maior numero contido dentro de um array usando o for*/