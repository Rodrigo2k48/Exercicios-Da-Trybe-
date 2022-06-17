const firstSide = 0;
const secondSide = -100;
const tirdSide = 80;

let = fusionSide = firstSide + secondSide + tirdSide; 

if (firstSide < 0 || secondSide < 0 || tirdSide < 0) {
  console.log("Numero Invalido");
} else if (fusionSide === 180) {
  console.log("Você tem um triangulo de °",fusionSide, true);
} else {
  console.log(fusionSide, "° não representa um triangulo", false)
}


/* Tem duas formas de se fazer a verificação se o numero ele é maior que zero, uma é vendo se ele é apenas menor que 0 e a outra usando a função Math.sign que retonar o numero positivo negativo ou zero, o codigo seria mais ou menos assim */