import React, { Component } from 'react';
import Boxes from './Boxes';
import './ColorPicker.css';

class ColorPicker extends Component {

    static defaultProps = {
        numBoxes: 16
    }
    constructor(props){
        super(props);
        this.state = {
            color: 'rgb(100, 100, 100)',
            numBoxes: Array.from({ length: this.props.numBoxes})
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
            <div className="section">
                <div  onClick={this.handleClick}  className="ColorPicker">
                    {this.state.numBoxes.map(n => (
                        <Boxes color={this.state.color}/>
                    ))} 
                </div>
            </div>
        )
    }
}

export default ColorPicker;