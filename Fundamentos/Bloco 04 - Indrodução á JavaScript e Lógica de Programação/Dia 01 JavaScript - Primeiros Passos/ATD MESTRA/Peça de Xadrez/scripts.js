const chessPiece = "rainHA"
const jokerPierce = chessPiece.toLowerCase()

switch (jokerPierce) {
  case 'bispo':
    console.log('Bispo-> Diagonal.');
   break;

  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
   break;

  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
   break;

  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
   break;

  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
   break;

  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
  break;

  default:
    console.log('Erro, peça inválida!');
    break;
}

/* Voce pode colocar o .loLowerCase dentro do switch...(ficaria assim: switch (jokerPierce.toLowerCase()))Ou seja ele pode verificar já com uma funçao imbutida oque é algo muito interessante para verificar esse tipo de coisa */