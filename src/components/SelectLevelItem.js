import React, { Component } from 'react';
import {Link} from "react-router-dom";

class SelectLevelItem extends Component {
    render() {
        return (
            <Link to={`/game/${this.props.level}`}>
            <div className="levelItem">
                <div className="levelTitle">
                    {`Level ` + this.props.level}
                </div>
                <div className="levelName">
                    {this.props.levelName}
                </div>
            </div>
            </Link>
        );
    }
}

export { SelectLevelItem };
