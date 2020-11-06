import React, { Component } from 'react';
import Field from './FieldComponent';
import Score from './ScoreComponent';
import Timer from './TimerComponent';
import { connect } from 'react-redux';
import { postScore } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        score: state.score
    };
};

const mapDispatchToProps = {
    postScore: (score) => (postScore(score))
};

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
        console.log("got new score" + this.state.score);
    }

    callbackFromField2 = (fieldData) => {
        this.setState({value: fieldData});
        console.log("got new value" + fieldData);
        if (this.state.value == this.state.mole) {
            this.setState({score: this.state.score + 10});
            console.log("Aye, you whacked the mole!" + this.state.score);
        }
        else {
            console.log("Aye, try again!");
        }
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
                <Score value={this.state.score} />
                <Field score={this.state.score} gameCallback={this.callbackFromField} gameCallback2={this.callbackFromField2}  />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);