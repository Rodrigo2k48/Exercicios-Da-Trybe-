let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}
console.log(result);


/* Somando todos os numeros de um array e guardando numa variavel vazia não pode ser const, tem que ser let por que o valor é modificado da variavel dentro do for  */