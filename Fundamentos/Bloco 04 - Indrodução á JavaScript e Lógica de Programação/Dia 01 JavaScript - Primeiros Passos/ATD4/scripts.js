const currentHour = 2;

let message;
/* Horario maior ou igual que 22 */
if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
  /* Horario menor que 22 (<22) */
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
  /* Se o horario for ...e horario estiver no enunciado 
  é o mesmo codigo muitas das vezes */
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
  /* Se o horario estiver entre... */
} else if (currentHour < 11 && currentHour < 4) {
  message = "Hmmm, cheiro de café recém passado";
/* EU QUE ADICIONEI ESSA LINHA, 
só para deixar o codigo mais completo */
} else {
  message = "Acabei de acordar"    
}


console.log(message)