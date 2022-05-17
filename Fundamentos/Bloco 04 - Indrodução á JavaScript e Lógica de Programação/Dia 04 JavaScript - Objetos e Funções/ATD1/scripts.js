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

console.log ("A Incrivel Jogadora " + fullName+ " tem incriveis " + player.age + ' de idade' )