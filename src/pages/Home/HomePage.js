import React, { Component } from 'react';
import { stages } from '../../helpers/gameSetup'
import { SelectLevelItem } from '../../components/SelectLevelItem';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            highScore: 0,
        }
    }

    componentDidMount() {
        const localHighestScore = localStorage.getItem("highestScore");
        if (localHighestScore !== null){
            this.setState({highScore: localHighestScore,});
        }
    }

    render() {
        return (
            <div>
                <h1>Smack Abacha</h1>
                <h3>You get this one chance to smack the hell out of Abacha! Enjoy :) ______________________________________</h3>
                <h2 className="home-highscore">High Score - <span>{this.state.highScore}</span></h2>
                <div className="levels">
                    {stages.map((level, idx) => {
                        return (
                            <SelectLevelItem
                                key={idx}
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
