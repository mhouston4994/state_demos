import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render(){
        const face = `fa fa-dice-${this.props.face} ${this.props.rolling && "shaking"}`;
        return(
            <i className={face}></i>
        )
    }
}

export default Die;