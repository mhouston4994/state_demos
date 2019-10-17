import React, { Component } from 'react';
import './Boxes.css';
import './ColorPicker.js';

class Boxes extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'rgb(100, 100, 100)',
        }
        this.handleClick = this.handleClick.bind(this);
    }
    randomGenerator(){
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        this.setState({color: `rgb(${r}, ${g}, ${b})`});
    }
    handleClick(){
        this.randomGenerator();
    }
    render(){
        return(
            <div  onMouseOver={this.handleClick}  className="Boxes">
                <div className="Boxes" style={{ backgroundColor: this.state.color }}></div>
                </div>

        )
    }
}

export default Boxes;