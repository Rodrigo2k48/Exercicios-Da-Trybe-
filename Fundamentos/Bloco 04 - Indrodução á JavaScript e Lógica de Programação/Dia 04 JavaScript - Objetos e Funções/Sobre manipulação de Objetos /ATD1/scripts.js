/*A FORMA MAIS CORRETA DE CIRAR
   UM OBJETO EM JAVASCRIPT  */
  
  let player = {
  name : 'Marta',
  lastName : 'Silva',
  age : 34,
  medals : {
     golden: 2,
     silver: 3,
  } 
}

let fullName = player.name + ' ' + player.lastName;

/* console.log ("A Incrivel Jogadora " + fullName+ " tem incriveis " + player.age + ' de idade' ) */

player ['bestInTHeWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]
/* console.log(player); */
/* 
console.log("A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes " + player.bestInTHeWorld); */

console.log("A jogadora possui " + player.medals.golden + " de ouro e " + player.medals.silver + " de prata" );


