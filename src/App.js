import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'


  const app = props =>{
    const[personsName, setPersonState] = useState({
      persons :[
        {name:"Max",age:28},
        {name:"Stephen",age:29},
        {name:"Manu",age:27},
      ]
  });

  const switchNameHandler=()=>{
    console.log('hello');
    setPersonState({
      persons :[
        {name:"Ronaldo",age:28},
        {name:"Messi",age:29},
        {name:"Manu",age:27},      
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={switchNameHandler}>Change Name</button>
      <Person name={personsName.persons[0].name} age={personsName.persons[0].age}/>
      <Person name={personsName.persons[1].name} age={personsName.persons[1].age}>I love football</Person>
      <Person name={personsName.persons[2].name} age={personsName.persons[2].age}/>
    </div>
  );
}

export default app;
