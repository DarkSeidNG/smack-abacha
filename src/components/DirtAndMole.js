import React, { Component } from 'react';
import { gameActions } from "../redux/actions/game.actions";
import {connect} from "react-redux";
import pain from '../assets/sounds/pain.wav';

class DirtAndMole extends Component {

    constructor(props){
        super(props);
        this.moleRef = React.createRef();
        this.captureAudio = new Audio(pain);

    }
    componentDidMount() {
        //new Fireworks(this.moleRef.current);
        this.captureAudio.load();
    }

    onMoleClick = (e) => {
        if(!e.isTrusted) return; // cheater!
        this.props.dispatch(gameActions.success());
        e.target.parentNode.classList.remove('up');
        this.captureAudio.play();
    };

    render() {
        return (
            <div className={`hole ` + this.props.upState}>
                <div ref={this.moleRef} className="mole" onClick={this.onMoleClick} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { hit } = state.game;
    return {
        hit
    };
}

const connectedDirtAndMole = connect(mapStateToProps)(DirtAndMole);
export { connectedDirtAndMole as DirtAndMole };