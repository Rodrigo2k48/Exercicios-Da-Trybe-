// import React from 'react';
// import './App.css';

// const Task = (value) => {
//   return (
//     <li key={value}>{value}</li>
//   );
// }

// const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

// class App extends React.Component {
//   render() {
//     return (
//       <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
//     );
//   }
// }

// export default App;

// -----------------------------OUTRA FORMA DE FAZER-----------------

// import React from 'react';
// import './App.css';

// // Pode ser ArrowFunction também. 
// function Task (value) {
//   return <li>{value}</li>;
// };

// const tarefas = ['Estudar', 'Desenha', 'Ver futebol', 'Fazer os Projetos'];

// const Lista = () => {
//   return <ul>{ tarefas.map((tarefa) => Task(tarefa)) }</ul>
// }

// class App extends React.Component {
//   render() {
//     return (
//       <Lista />
//     );
//   };
// }

// export default App;
