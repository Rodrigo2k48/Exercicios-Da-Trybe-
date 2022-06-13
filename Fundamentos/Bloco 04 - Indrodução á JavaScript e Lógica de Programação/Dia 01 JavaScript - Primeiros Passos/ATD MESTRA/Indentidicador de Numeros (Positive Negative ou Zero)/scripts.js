/* Math.sign é uma função que verifica se o numero é positivo, negativo ou se ele é zero  */

const numberSelect = -2;
const  numberChecker= Math.sign(numberSelect)

if (numberChecker === 1) {
  console.log('Esse é um numero positivo');
} else if (numberChecker === -1) {
  console.log('Esse é um numero negativo');
} else if (numberChecker === +0) {
  console.log("esse numero é o zero");
} else {
  console.log("não se aplica");
}