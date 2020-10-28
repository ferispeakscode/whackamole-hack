import React, { Component } from 'react';
import Square from './SquareComponent';

class Field extends Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
}

export default Field;