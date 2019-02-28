import React, { Component } from 'react';
import { gameActions } from "../redux/actions/game.actions";
import {connect} from "react-redux";

class DirtAndMole extends Component {

    onMoleClick = (e) => {
        if(!e.isTrusted) return; // cheater!
        this.props.dispatch(gameActions.success());
        e.target.parentNode.classList.remove('up');
    };

    render() {
        return (
            <div className={`hole ` + this.props.upState}>
                <div className="mole" onClick={this.onMoleClick} />
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