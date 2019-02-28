import React, { Component } from 'react';
import { stages } from '../../helpers/gameSetup'
import { SelectLevelItem } from '../../components/SelectLevelItem';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Whack-A-Tiku</h1>
                <h3>This game is just a fun take on the 2019 Nigerian presidential elections, everything here is just for fun</h3>

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
