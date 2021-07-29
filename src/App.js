import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'



class App extends Component{
  state = {
    persons :[
      {name:"Max",age:28},
      {name:"Stephen",age:29},
      {name:"Manu",age:27},
    ]
  }

  switchNameHandler =(newName)=>{
    this.setState({
      persons :[
        {name:newName,age:28},
        {name:"Ronaldo",age:29},
        {name:"Manu",age:27},
      ]
    })
  }

  nameChangeHandler =(event)=>{
    this.setState({
      persons :[
        {name:"Messi",age:28},
        {name:"Ronaldo",age:29},
        {name:event.target.value,age:27},
      ]
    })
  }

  render(){
    const style={
      backgroundColor : "white",
      font: "inherit",
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer",
    }
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button style={style} onClick={()=>this.switchNameHandler('Rooney')} >Change Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Neymar')}>
          I love football
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.nameChangeHandler}/>
      </div>
    );
  }

}
export default App;
