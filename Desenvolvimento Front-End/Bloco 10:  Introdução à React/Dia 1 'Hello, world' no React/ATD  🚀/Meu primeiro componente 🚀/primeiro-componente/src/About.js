import React from "react";

class About extends React.Component {
  render() {
    const skills = ['HTML','Css', 'JavaScript', 'Photoshop']
    // cria um array de tags <li> 
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) 

    return (
     <div>
     <h1> Rodrigo Gonçalves</h1>
     <p>Eu sou um menino sonhador e que luta pela conquista daqueles que os amam</p>
     <h2>Minhas Habilidades</h2>
     <ol>{jsxSkills}</ol>
     </div>
    );
  }
}

export default About;