/* A Forma Mais Correta de ser 
usar Switchs*/


let statusPessoa = 'LBATATA'
switch (statusPessoa) {
  case 'Aprovada':
    console.log('VOCE PASSOU GAROTA!!!')
   break 
  
  case 'Reprovado':
    console.log ('III RAPAZ DEU RUIM')   
    break;

  case 'Lista' :
    console.log ('AGUARDE NO EMAIL NOVAS INFORMAÇÕES')
   break

  default: 
  console.log('Não se aplica')
    break;
}