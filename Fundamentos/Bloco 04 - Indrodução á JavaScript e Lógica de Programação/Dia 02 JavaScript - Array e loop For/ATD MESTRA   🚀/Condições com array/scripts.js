let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index]
}
result = result / numbers.length

if (result > 20) {
  console.log("valor maior que 20");
} else if (result < 20) {
  console.log("valor menor ou igual a 20");
}

/* se eu não separa-se esse if e else if do for, ele ia rodar o codigo .length vezes o tamanho meu array, ou seja ele iria rodar 10 vezes o codigo, e como eu só quero que rode 1 vez, então tive que tirar do escopo do for*/

