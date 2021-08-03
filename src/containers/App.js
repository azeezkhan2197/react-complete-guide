import React, { Component } from 'react';
import cssClass from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

  nameChangeHandler =(event,id)=>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons : persons })
  }

  togglePersonHandler=()=>{
    const doesShow = this.state.showPersons;
    this.setState({
     showPersons : !doesShow
    })
  }

  render(){
    let person = null;
    let btnClass=''
    if (this.state.showPersons){
      person = <Persons
          persons={this.state.persons}
          clicked ={this.deletePersonHandler}
          changed= {this.nameChangeHandler} />
    }

    const classes=[];
    if (this.state.persons.length <=2){
      classes.push(cssClass.red);
    }
    if (this.state.persons.length<=1){
      classes.push(cssClass.bold);
    }


    return (
      <div className={cssClass.App}>
        <Cockpit persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}/>
        {person}
      </div>
    );
  }

}
export default App;
