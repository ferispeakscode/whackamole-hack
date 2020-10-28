import React, { Component } from 'react';
import Field from './FieldComponent';

class Game extends Component {
    
    constructor() {
        super();

        this.state = {
            score: 0,
        };
    }

    runHiragana = (event) => {
        console.log("runHiragana");
    }

    runKatakana = (event) => {
        console.log("runKatakana");
    }

    setupGame = () => {
    }

    generateMoles() {
    }

    gameOver = () => {
    }
    
    render () {

        return(
            <div>
                
                <h1>Whack-a-"Mole"!</h1>

                <p id="directions">Choose your mode of play!</p>

                <button className="modes easy" onClick={this.runHiragana}>Play in Hiragana</button>
                <button className="modes medium" onClick={this.runKatakana}>Play in Katakana</button>

                <Field />
            </div>
        );
    }
}

export default Game;