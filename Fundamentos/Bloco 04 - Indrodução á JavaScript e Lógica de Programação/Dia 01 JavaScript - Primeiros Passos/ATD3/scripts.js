/* A Forma Mais Correta de fazer o if e else if */

const nota = 2;

if (nota >= 80) {
  console.log ("Parabéns, você foi Aprovada(o)!")
}
else if (nota - 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera")
}
else if (nota < 60 ) { 
  console.log("Você foi REPROVA (O)!!!")
} 

console.log (nota)

