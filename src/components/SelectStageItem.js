import React, { Component } from 'react';
import {Link} from "react-router-dom";

class SelectStageItem extends Component {
    render() {
        return (
            <Link to={`/game/${this.props.stage}`}>
            <div className="stageItem">
                <div className="stageTitle">
                    {`Stage ` + this.props.stage}
                </div>
                <div className="stageName">
                    {this.props.stageName}
                </div>
            </div>
            </Link>
        );
    }
}

export { SelectStageItem };
