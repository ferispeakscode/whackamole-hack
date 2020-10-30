import React, { Component } from 'react';
import '../styles/square.css';

class Square extends Component {
    constructor (props) {
        super();
        this.state = {
            value: props.value,
            mole: "あ",
            score: props.score
        }
    }

    checkMole = () => {
        if ( this.state.value == this.state.mole) {
            console.log("You whacked the mole!");
            this.updateScore();
        }
        else {
            console.log("Oops, try again!");
        }
    }

    updateScore = () => {
        this.setState( {score: this.state.score + 10} );
    }

    render() {
        console.log("Score is " + this.state.score);
        return (
            <button className="square" onClick={this.checkMole}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;