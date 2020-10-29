import React, { Component } from 'react';
import '../styles/square.css';

class Square extends Component {
    constructor (props) {
        super();
        this.state = {
            value: props.value,
            mole: "あ"
        }
    }

    checkMole = () => {
        if ( this.state.value == this.state.mole) {
            console.log("You whacked the mole!");
        }
        else {
            console.log("Oops, try again!");
        }
    }

    render() {
        return (
            <button className="square" onClick={this.checkMole}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;