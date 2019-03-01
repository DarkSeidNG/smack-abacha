import React, { Component } from 'react';
import { stages } from '../../helpers/gameSetup'
import { SelectLevelItem } from '../../components/SelectLevelItem';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            highScore: localStorage.getItem('highestScore'),
        }
    }
    render() {
        return (
            <div>
                <h1>Whack-A-Tiku</h1>
                <h3>This game is just a fun take on the 2019 Nigerian presidential elections, everything here is just for fun</h3>
                <h2 className="home-highscore">High Score - <span>{this.state.highScore}</span></h2>
                <div className="levels">
                    {stages.map((level, idx) => {
                        return (
                            <SelectLevelItem
                                level={idx + 1}
                                levelName={level.levelName}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export { HomePage };
