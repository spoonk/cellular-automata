import React, { Component } from 'react';
import Settings from './components/Settings';
import Content from './components/Content';
import {genBoard} from "./simulate"



class App extends Component {
  constructor(props) {
    super(props)
    var seed = this.setUpSeed(150);
    var board = [];
    board.push(seed);

    this.state = {
      generated: null,
      seed: seed,
      board: board,
      width: 150,
      generations: 100,
      rule: 30
    }
  }


  
  setUpSeed = (width) => {
    var arr = [];
    for (var i =0; i < width; i++){
      arr.push(0);
    }
    arr[width >> 1] = 1;
    return arr;
  }

  generateBoard = (settings) => {
    this.setState({
      // could add some behavior to handle where we only increased number of generations
        // to use previous result and do less computation
      board:genBoard(this.state.seed, settings.rule, settings.generations, settings.width),
      rule: settings.rule,
      generations: settings.generations
    })
  }

  setWidth = (width) => {

  }





  render() {
    return (
      <div id="app">
        <div id="main-container">
          <Content 
            board = {this.state.board}
            rule = {this.state.rule}
            height = {this.state.generations}
          />
          <Settings 
            generateBoard = {this.generateBoard}
            updateSeed = {(width) => {
              var newSeed =  this.setUpSeed(width);
              var board = [];
              board.push(newSeed)
              this.setState({seed : newSeed , board: board});
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
