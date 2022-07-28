import React, { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

// A classe Content deve renderizar o array conteudos com a utilização da função map, como visto anteriormente, com o seguinte formato: 
// O conteúdo é: `Nome do Conteúdo`
// Status: `Status do Conteúdo`
// Bloco: `Bloco do Conteúdo`

// Manipulação muito interesante com o map 
class Content extends Component {
  render() { 
    return(
    <div className="content">
      {conteudos.map((conteudo) => (
      <div  key={conteudo.conteudo} className="card"> 
        <h4>{`O conteudo é: ${conteudo.conteudo}`}</h4>
        <p>{`status: ${conteudo.status}`}</p>
        <p>{`Bloco: ${conteudo.bloco}`}</p>
      </div>
      )
       )
        }
    </div>
    );
  }
}
 
export default Content;
