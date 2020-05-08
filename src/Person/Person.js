import React from 'react';

import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width=500px)': {
            width: '450px',
            backgroundColor: '#eee'
        }
    }
    return (
        <div className="person" style={style}>
            <p onClick={props.click}> I 'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default Radium(person);