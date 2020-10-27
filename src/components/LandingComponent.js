import React, { Component } from 'react';
import Game from './GameComponent';
import '../styles/landing.css';


class Landing extends Component {
    constructor() {
        super();
        this.state = {
            shouldShowGame: false
        };
    }

    showGame = () => {
        console.log('Start game clicked');
        this.setState({shouldShowGame: true});
    };

    render() {
        if (this.state.shouldShowGame) {
            return (
                <Game />
            );
        }

        return (
            <div>
                <button className="startButton" onClick={this.showGame}>Start Game</button>
            </div>
        );
    }
}

export default Landing;