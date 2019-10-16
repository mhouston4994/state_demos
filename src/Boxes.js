import React, { Component } from 'react';
import './Boxes.css';

class Boxes extends Component {
    render(){
        return(
            <div className="Boxes" style={{ backgroundColor: this.props.color }}></div>
        )
    }
}

export default Boxes;