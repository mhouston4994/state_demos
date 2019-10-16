import React, { Component } from "react";
import Coin from './coin.js';

class Flipper extends Component {

    static defaultProps = {
        img: `https://tinyurl.com/react-coin-heads-jpg`
    }

    constructor(props){
        super(props);
        this.state = {
            img: this.props.img
        }
        this.flippityFlip = this.flippityFlip.bind(this);
    }
    flippityFlip(){
       if(Math.floor(Math.random() * 2) === 0){
           this.setState({img: `https://tinyurl.com/react-coin-heads-jpg`});
       } else {
        this.setState({img: `https://tinyurl.com/react-coin-tails-jpg`});
       }
       }
    render(){
        return(
            <div className="section">
                <Coin img={this.state.img} />
                <button onClick={this.flippityFlip}>Flip Coin</button>
            </div>
        )
    }
}

export default Flipper;