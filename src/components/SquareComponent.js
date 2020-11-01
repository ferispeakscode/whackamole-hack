import React, { Component } from 'react';
import '../styles/square.css';

class Square extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: props.score,
            value: props.value,
            mole: "あ",
            selected: "I am square"
        }
    }

    checkMole = () => {
        if ( this.state.value == this.state.mole) {
            this.setState({score: this.state.score + 5});
            console.log("You whacked the mole!" + this.state.score);
        }
        else {
            console.log("Oops, try again!");
        }
    }

    sendData = () => {
        this.props.fieldCallback(this.state.value);
    }

    render() {
        return (
            <button className="square" onClick={this.sendData}  >
                {this.state.value}
            </button>
        );
    }
}

export default Square;