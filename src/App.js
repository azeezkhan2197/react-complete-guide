import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'



class App extends Component{
  state = {
    persons :[
      {id : 1,name:"Max",age:28},
      {id : 2,name:"Stephen",age:29},
      {id : 3,name:"Manu",age:27},
    ],
    showPersons : false
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

  deletePersonHandler = (personIndex)=>{
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons})
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

  togglePersonHandler=()=>{
    const doesShow = this.state.showPersons;
    this.setState({
     showPersons : !doesShow
    })
  }

  render(){
    const style={
      backgroundColor : "green",
      color : "white", 
      font: "inherit",
      border: '1px solid blue',
      padding: '8px',
      cursor: "pointer", 
    }
    let person = null;
    if (this.state.showPersons){
      person = (
        <div>
          {this.state.persons.map((person,index) => {
             return <Person name={person.name} age={person.age} key={person.id} 
             click={()=>this.deletePersonHandler(index)} />
          })}
         </div>
      )
      style.backgroundColor = "red";
    }
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button style={style} onClick={this.togglePersonHandler} >Toggle Person</button>
        {person}
      </div>
    );
  }

}
export default App;
