import React, { Component } from 'react';
import Square from './SquareComponent';

class Field extends Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const hiragana = ["あ", "い", "う", "え", "お", 
                        　"か", "き", "く", "け", "こ", 
                          "さ", "し", "す", "せ", "そ", 
                        　"た", "ち", "つ", "て", "と", 
                        　"な", "に", "ぬ", "ね", "の", 
                        　"は", "ひ", "ふ", "へ", "ほ",
                          "ま", "み", "む", "め", "も",
                          "や", "ゆ", "よ", 
                        　"ら", "り", "る", "れ", "ろ", 
                        　"わ", "を", "ん" ];

        const values = [];
        for (let i = 0; i < 25; i++) {
            let selection = Math.floor(Math.random() * 25);
            console.log(selection);
            values.push(hiragana[selection]);
        }

        console.log(values);

        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(values[0])}
                    {this.renderSquare(values[1])}
                    {this.renderSquare(values[2])}
                    {this.renderSquare(values[3])}
                    {this.renderSquare(values[4])}
                </div>
                <div className="board-row">
                    {this.renderSquare(values[5])}
                    {this.renderSquare(values[6])}
                    {this.renderSquare(values[7])}
                    {this.renderSquare(values[8])}
                    {this.renderSquare(values[9])}
                </div>
                <div className="board-row">
                    {this.renderSquare(values[10])}
                    {this.renderSquare(values[11])}
                    {this.renderSquare(values[12])}
                    {this.renderSquare(values[13])}
                    {this.renderSquare(values[14])}
                </div>
                <div className="board-row">
                    {this.renderSquare(values[15])}
                    {this.renderSquare(values[16])}
                    {this.renderSquare(values[17])}
                    {this.renderSquare(values[18])}
                    {this.renderSquare(values[19])}
                </div>
                <div className="board-row">
                    {this.renderSquare(values[20])}
                    {this.renderSquare(values[21])}
                    {this.renderSquare(values[22])}
                    {this.renderSquare(values[23])}
                    {this.renderSquare(values[24])}
                </div>
            </div>
        );
    }
}

export default Field;