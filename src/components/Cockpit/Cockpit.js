import React from 'react';
import cssClass from './Cockpit.module.css';

const cockpit = (props)=>{

    const classes=[];
    let btnClass='';
    if (props.persons.length <=2){
      classes.push(cssClass.red);
    }
    if (props.persons.length<=1){
      classes.push(cssClass.bold);
    }
    if (props.showPersons){
        btnClass=cssClass.red
    }
    return(
        <div>
            <h1 className ={classes.join(' ')}>Hello World</h1>
            <button className={btnClass}  onClick={props.clicked} >Toggle Person</button>
        </div>
    )
}

export default cockpit;