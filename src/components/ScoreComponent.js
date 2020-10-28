import React, { Component } from 'react';

class Score extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.value}</h1>
            </div>
        );
    }
}

export default Score;