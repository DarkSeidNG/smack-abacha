import React, { Component } from 'react';
import { dirtNumber } from "../../helpers/gameSetup";
import { DirtAndMole } from "../../components/DirtAndMole";
import { connect } from 'react-redux';
import { Fireworks } from "../../helpers/fireworksHelper";
import swal from 'sweetalert';
import fireworks from '../../assets/sounds/fireworks.mp3';
import {Link} from "react-router-dom";


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
        this.containerRef = React.createRef();
        this.highScoreAudio = new Audio(fireworks);

        this.dirtItems = [];
        this.holes = [];
        this.timeUp = true;
        this.time = this.randomTime(1000 / parseInt(this.state.level), 1000 / parseInt(this.state.level));


    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params.level !== undefined && parseInt(params.level) !== 0) {
            this.setState({
                level: params.level,
            });
        }

        const localHighestScore = localStorage.getItem("highestScore");
        if (localHighestScore !== null){
            this.setState({highestScore: localHighestScore,});
        }

        this.fireworks = new Fireworks(this.containerRef.current);
        this.fireworks.init();
        this.fireworks.bindEvents();
        this.highScoreAudio.load();
    }

    /**
     * On componentDidUpdate we check to see if the redux dispatched a new hit success event and updates the
     * score state accordingly
     * @param oldProps
     */
    componentDidUpdate(oldProps) {
        const newProps = this.props;
        if(oldProps.hitIndex !== newProps.hitIndex) {
            this.setState({score: this.state.score + 10 * this.state.level});
            this.fireworks.drawFireworks();
            this.fireworks.drawParticles();
        }
    }

    /**
     * Create DirtMole Items (Holes)
     * @returns {Array}
     */
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

    /**
     * return a random hole (dirt)
     * @param holes
     * @returns {*}
     */
    randomHole = (holes) => {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === this.state.lastHole) {
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
        setTimeout(() => {
            this.fireworks.clear();
            this.setHighScore();
            this.setState({ showButton: true });
        }, 22000);
    };

    setHighScore = () => {
        if (this.state.score > this.state.highestScore){
            localStorage.setItem("highestScore", this.state.score);
            this.setState({highestScore: this.state.score,});

            swal({
                title: "New highscore",
                text: "You hit a new high score - " + this.state.highestScore,
                icon: "success",
            });
            this.fireworks.blastFireworks();
            this.highScoreAudio.play();
        }
    };

    render() {
        return (
            <div>
                <h1>Smack Abacha</h1>
                <h3>You get this one chance to smack the hell out of Abacha! Enjoy :) ______________________________________</h3>
                <div className="gameDetails"><div>Level - <span>{this.state.level}</span></div><div>Score - <span>{this.state.score}</span></div><div>Highest Score - <span>{this.state.highestScore}</span></div></div>
                <Link to={`/`}><button className="gameButton" style={{float: 'left'}}>Main Menu</button></Link> {this.state.showButton ? <button onClick={this.startGame} className="gameButton" style={{float: 'right'}}>Start Game</button> : ''}

                <div className="game" ref={this.containerRef}>
                    {this.createDirtItems()}
                </div>


            </div>
        );
    }
}
function mapStateToProps(state) {
    const { hit, hitIndex } = state.game;
    return {
        hit,
        hitIndex
    };
}

const connectedGamePage = connect(mapStateToProps)(GamePage);
export { GamePage as TestGamePage };
export { connectedGamePage as GamePage };

