import React, { Component } from 'react';
import { dirtNumber } from "../../helpers/gameSetup";
import { DirtAndMole } from "../../components/DirtAndMole";


class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 0,
            dirtItems: [],
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if (params.level !== undefined) {
            this.setState({
                level: params.level,
            });
        }

        for (let i = 0; i < dirtNumber; i++){
            this.state.dirtItems.push(<DirtAndMole/>);
        }
    }

    render() {
        return (
            <div>
                <h1>Whack-A-Tiku</h1>
                <h3>This game is just a fun take on the 2019 Nigerian presidential elections, everything here is just for fun</h3>

                <div className="game">
                    {this.state.dirtItems.map((dirtItem, idx) => {
                        return (<React.Fragment key={idx}>{dirtItem}</React.Fragment>);
                    })}
                </div>
            </div>
        );
    }
}

export { GamePage };
