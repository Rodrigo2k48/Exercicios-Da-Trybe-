/* let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length); */
// 3

/* Uma Parada do .length interessante é que alem dele dizer o tamanho de posições de um array, ele diz o tamanho de strings também ou seja, dá pra validar o tamanho de uma senha...que maneiro, ó o exemplo aí a baixo disso daí

var senha = "abcde";

if (senha.length < 6) {
   console.log("A senha precisa ter pelo menos 6 (seis) caracteres.");
}

*/

/* Para ter acesso a primeira posição do array é simples use o indice ao seu favor [3 ou 2 ou 0 ou 1 o numero que vc quiser verificar]
agora quando vc quer ver a primeira posição do array vc pode usar o .length -1 (o por que do -1 ainda é um misterio para mim, mas funciona) */
/* 
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café


let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro */


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']