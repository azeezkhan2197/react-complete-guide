import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons :[
      {name:"Max",age:28},
      {name:"Stephen",age:29},
      {name:"Manu",age:27},
    ]
  }

  switchNameHandler=()=>{
    console.log('hello');
    this.setState({
      persons :[
        {name:"Ronaldo",age:28},
        {name:"Messi",age:29},
        {name:"Manu",age:27},      
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={this.switchNameHandler}>Change Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I love football</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
