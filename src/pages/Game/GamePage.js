import React, { Component } from 'react';
import { dirtNumber } from "../../helpers/gameSetup";
import { DirtAndMole } from "../../components/DirtAndMole";


class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 1,
            upState: '',
            lastHole: '',
            showButton: true,
            score: 0,
            highestScore: 0,
        };

        this.dirtItems = [];
        this.holes = [];
        this.timeUp = true;
        this.time = this.randomTime(300 / parseInt(this.state.level), 1000 / parseInt(this.state.level));
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params.level !== undefined && parseInt(params.level) !== 0) {
            this.setState({
                level: params.level,
            });
        }
    }

    createDirtItems = () => {
        this.dirtItems = [];
        for (let i = 0; i < dirtNumber; i++){
            this.dirtItems.push(<DirtAndMole upState = {this.state.upState} key={i}/>);
        }
        return this.dirtItems;
    };

    randomTime = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    };

    randomHole = (holes) => {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === this.state.lastHole) {
            //console.log('Ah nah thats the same one bud');
            return this.randomHole(holes);
        }
        this.setState({lastHole: hole});
        return hole;
    };

    peep = () => {
        const hole = this.randomHole(this.holes);
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if (!this.timeUp) this.peep();
        }, this.time);
    };

    startGame = () => {
        this.setState({upState: ''});
        this.holes = document.querySelectorAll('.hole');

        this.timeUp = false;
        this.setState({ showButton: false });
        this.setState({score: 0});
        this.peep();
        setTimeout(() => { this.timeUp = true; }, 20000);
        setTimeout(() => { this.setState({ showButton: true }) }, 22000);
    };

    render() {
        return (
            <div>
                <h1>Whack-A-Tiku</h1>
                <h3>This game is just a fun take on the 2019 Nigerian presidential elections, everything here is just for fun</h3>
                <div className="gameDetails"><div>Level - <span>{this.state.level}</span></div><div>Score - <span>{this.state.score}</span></div><div>Highest Score - <span>{this.state.highestScore}</span></div></div>
                {this.state.showButton ? <button onClick={this.startGame} className="startButton" >Start Game</button> : ''}


                <div className="game">
                    {this.createDirtItems()}
                </div>
            </div>
        );
    }
}

export { GamePage };
