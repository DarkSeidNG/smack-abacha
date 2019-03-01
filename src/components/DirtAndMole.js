import React, { Component } from 'react';
import { gameActions } from "../redux/actions/game.actions";
import {connect} from "react-redux";
import slap from '../assets/sounds/slap.mp3';

class DirtAndMole extends Component {

    constructor(props){
        super(props);
        this.moleRef = React.createRef();
        this.captureAudio = new Audio(slap);
    }

    componentDidMount() {
        this.captureAudio.load();
    }

    /**
     * On click check if the click is trusted then dispatch the success action and play the hit audio
     * @param e - event
     */
    onMoleClick = (e) => {
        if(!e.isTrusted) return; // cheater!
        this.props.dispatch(gameActions.success());
        e.target.parentNode.classList.remove('up');
        this.captureAudio.play();
    };

    render() {
        return (
            <div className={`hole up` + this.props.upState}>
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