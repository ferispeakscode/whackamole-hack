import React, { Component } from 'react';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            time: {},
            seconds: 10
        };
        this.timer = 0;
    }

    secondsToTime = (secs) => {
        let hours = Math.floor(secs / (60*60));

        let divisorForMinutes = secs % (60*60);
        let minutes = Math.floor(divisorForMinutes / 60);

        let divisorForSeconds = divisorForMinutes % 60;
        let seconds = Math.ceil(divisorForSeconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount = () => {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState( {time: timeLeftVar} );
        this.startTimer();
    }

    startTimer = () => {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown = () => {
        //Remove one second, set state to cause re-render
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds
        });

        //Check if at 0
        if (seconds == 0) {
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <div>
                m: {this.state.time.m} s: {this.state.time.s}
            </div>
        );
    }
}

export default Timer;