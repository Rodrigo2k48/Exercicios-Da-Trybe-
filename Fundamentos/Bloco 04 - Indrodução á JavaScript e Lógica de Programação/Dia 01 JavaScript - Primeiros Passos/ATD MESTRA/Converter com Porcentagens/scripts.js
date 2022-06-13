let percentage = 1;

if (percentage < 0 || percentage > 100) {
  console.log ("ERRO! coloque uma nota valida")
} else if (percentage >= 90) {
  console.log("Sua Nota foi A");
} else if (percentage >= 80) {
  console.log("Sua Nota foi B");
} else if (percentage >= 70) {
  console.log("Sua nota foi C");
} else if (percentage >= 60) {
  console.log("Sua nota foi D");
} else if (percentage >= 50) {
  console.log("Sua nota foi E");
} else if (percentage < 50)  {
  console.log("Sua nota foi F");
}


/* Não dá para fazer com o switch case */