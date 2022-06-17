let numbers = [3, 3, 3, 12, 20, 8, 200, 2, 32, 22];

let imparNumero = numbers[0]
let contador = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0 ) {
    contador +=1
  } 
}
 if (contador === 0){
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(contador);
}

/* As vezes voce tem que tirar um if do for, um if else, para não vir numeros repetidos, ou até mesmo criar if e else fora do for mas ainda usando artificios do for ao seu favor*/