import React, { Component } from 'react';
import { gameActions } from "../redux/actions/game.actions";
import {connect} from "react-redux";
//import { Fireworks } from "../helpers/fireworksHelper";

class DirtAndMole extends Component {

    constructor(props){
        super(props);
        this.moleRef = React.createRef();
    }
    componentDidMount() {
        //new Fireworks(this.moleRef.current);
    }

    onMoleClick = (e) => {
        if(!e.isTrusted) return; // cheater!
        this.props.dispatch(gameActions.success());
        e.target.parentNode.classList.remove('up');
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