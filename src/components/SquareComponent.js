import React, { Component } from 'react';
import '../styles/square.css';

class Square extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    sendData = () => {
        this.props.fieldValueCallback(this.state.value);
    }

    render() {
        return (
            <button className="square" onClick={this.sendData} >
                {this.state.value}
            </button>
        );
    }
}

export default Square;