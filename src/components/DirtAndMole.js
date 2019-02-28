import React, { Component } from 'react';

class DirtAndMole extends Component {
    componentDidMount() {

    }

    onMoleClick = (e) => {
        if(!e.isTrusted) return; // cheater!
        alert("A hit");
        this.parentNode.classList.remove('up');
    };

    render() {
        return (
            <div className={`hole ` + this.props.upState}>
                <div className="mole" onClick={this.onMoleClick} />
            </div>
        );
    }
}

export { DirtAndMole };
