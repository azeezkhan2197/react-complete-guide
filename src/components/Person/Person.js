import React from 'react';
import cssClasses from './Person.module.css'

const person = (props)=>{
    return( 
        <div className={cssClasses.Person}>
            <p onClick={props.click}>I am {props.name} and I am {props.age} old</p>
            <p>{props.children}</p>
            <input type = 'text' onChange={props.changed} value={props.name}/>
        </div>
    )
}
export default person;
