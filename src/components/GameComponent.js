import React, { Component } from 'react';
import Field from './FieldComponent';
import Score from './ScoreComponent';
import Timer from './TimerComponent';

class Game extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            mole: "あ"
        };
    }

    callbackFromField = (fieldData) => {
        this.setState({score: fieldData});
    }
    
    render () {
        return(
            <div>
                <h1>Whack-a-"Mole"!</h1>

                <p id="directions">Choose your mode of play!</p>

                <p>
                    <button className="modes easy" onClick={this.runHiragana}>Play in Hiragana</button>
                    <button className="modes medium" onClick={this.runKatakana}>Play in Katakana</button>
                </p>

                <Timer />
                {/* {this.renderScore()} */}
                <Score value={this.state.score} />
                <Field score={this.state.score} gameCallback={this.callbackFromField}  />
            </div>
        );
    }
}

export default Game;