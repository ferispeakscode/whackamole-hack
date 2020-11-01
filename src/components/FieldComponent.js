import React, { Component } from 'react';
import Square from './SquareComponent';

class Field extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            score: props.score,
            mole: "あ"
        }
    }

    renderSquare(i) {
        return <Square value={i} score={this.state.score} whack={this.wasWhacked} fieldCallback={this.callbackFunction} />;
    }

    callbackFunction = (squareData) => {
        this.setState({value: squareData})
    }

    wasWhacked = () => {
        console.log(this.state.value + " is the value");
        if ( this.state.value == this.state.mole) {
            this.setState({score: this.state.score + 15});
            console.log("Yo! You whacked the mole!" + this.state.score);
        }
        else {
            console.log("Oopsies, try again!");
        }
    }

    render() {
        console.log("Field " + this.state.score + " and " + this.state.value + "!");

        //Alphabet Bank
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

        const katakana = ["ア", "イ", "ウ", "エ", "オ", 
                        　"カ", "キ", "ク", "ケ", "コ", 
                          "サ", "シ", "ス", "セ", "ソ", 
                        　"タ", "チ", "ツ", "テ", "ト", 
                        　"ナ", "ニ", "ヌ", "ネ", "ノ", 
                        　"ハ", "ヒ", "フ", "へ", "ホ",
                          "マ", "ミ", "ム", "メ", "モ",
                          "ヤ", "ユ", "ヨ", 
                        　"ラ", "リ", "ル", "レ", "ロ", 
                        　"ワ", "ヲ", "ン" ];                

        //Generate random letters for field
        const values = [];
        for (let i = 0; i < 24; i++) {
            let selection = Math.floor(Math.random() * 24);
            values.push(hiragana[selection]);
        }
        values.push("あ");

        //Randomize letters on field
        let currentIndex = values.length, tempValue, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            tempValue = values[currentIndex];
            values[currentIndex] = values[randomIndex];
            values[randomIndex] = tempValue;
        }

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