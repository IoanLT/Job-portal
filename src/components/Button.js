import React from 'react';

const Button = props =>(
    <span className="seeFullJob" onClick={props.action}>{props.text}</span>
)


export default Button