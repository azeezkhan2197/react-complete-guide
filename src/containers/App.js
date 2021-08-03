import React, { Component } from 'react';
import cssClass from './App.module.css';
import Person from '../components/Person/Person';




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
      person = (
        <div>
          {this.state.persons.map((person,index) => {
             return <Person name={person.name} age={person.age} key={person.id} 
             click={()=>this.deletePersonHandler(index)}
             changed={(event)=> this.nameChangeHandler (event,person.id)}
             />
          })}
         </div>
      )
      btnClass=cssClass.button;
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
        <h1 className ={classes.join(' ')}>Hello World</h1>
        <button className={btnClass}  onClick={this.togglePersonHandler} >Toggle Person</button>
        {person}
      </div>
    );
  }

}
export default App;
