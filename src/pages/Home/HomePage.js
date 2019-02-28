import React, { Component } from 'react';
import { stages } from '../../helpers/gameSetup'
import { SelectStageItem } from '../../components/SelectStageItem';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Whack-A-Tiku</h1>
                <h3>This game is just a fun take on the 2019 Nigerian presidential elections, everything here is just for fun</h3>

                <div className="stages">
                    {stages.map((stage, idx) => {
                        return (
                            <SelectStageItem
                                stage={idx}
                                stageName={stage.stageName}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export { HomePage };
