import React, { Component } from 'react';
import Boxes from './Boxes';
import './ColorPicker.css';

class ColorPicker extends Component {

    static defaultProps = {
        numBoxes: 18
    }
    
    render(){
        const boxes = Array.from({ length: this.props.numBoxes }).map(() =>
        <Boxes />);
        return(
            <div className="section">
                <div className="ColorPicker">
                        {boxes}
                </div>
            </div>
        )
    }
}

export default ColorPicker;