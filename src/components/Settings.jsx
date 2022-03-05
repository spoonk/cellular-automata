import React, { Component } from 'react';
import SettingBox from './SettingBox';


class Settings extends Component {
    constructor(props){
        super(props)
        this.state = {
            grids: 1, // gonna be hard to implement multiple rules
            width: 150,
            generations: 100,
            rule:30,
            numCells: 1,
            cellLayout: "uniform",
            valid: true,
            widthValid: true,
            heightValid: true,
            numCellsValid: true,
        }
    }

    generateBoard = () => { this.props.generateBoard(this.state); }

    setRule = (rule) => {
        if (rule > 255 || rule < 0){
            alert("rule must be between 0 and 255")
        } else {
            this.setState({rule : rule});
        }
    }

    setWidth = (width) => {
        if (width > 500 || width < 0){
            alert("width must be between 0 and 500")
        } else {
            this.setState({width: width}, () => {
                this.props.updateSeed(width);
            });
        }
    }

    setGenerations = (gens) => {
        if (gens > 500 || gens < 0){
            alert("gens must be between 0 and 500")
        } else {
            this.setState({generations: gens});
        }
    }

    setCells = (numCells) => {
        if (numCells > this.state.width || numCells < 0){
            alert("number of starting cells must be between 0 and width (inclusive)")
        } else {
            this.setState({numCells: numCells});
        }
    }

    render() {
        return (
            <div id="settings">
                <div id="settings-container">
                    <SettingBox 
                        name={"rule"}
                        description={"I recommend rules 13, 18, 30, 45, 57, 67, 77, 89 105, 133, 150, 169, and 225"}
                        toggle = {this.props.toggleRuleInfo}
                        cb={this.setRule.bind(this)}
                        def = {30}
                        min = {0}
                        max = {255}
                    />
                
                    <SettingBox 
                        name={"width"}
                        description={"number of cells in each generation"}
                        cb={this.setWidth.bind(this)}
                        def = {150}
                        min = {1}
                        max = {500}
                    />
                    <SettingBox 
                        name={"generations"}
                        description={"number of rows"}
                        cb={this.setGenerations.bind(this)}
                        def = {100}
                        min = {0}
                        max = {500}
                    />
                    <button id="generation-zero-editor-button" onClick={this.props.toggleEditor}>
                        edit generation 0    
                    </button>
                    <button id="generate-button" onClick={this.generateBoard} >
                        run
                    </button>
                </div>
                
            </div>
        );
    }
}

export default Settings;
