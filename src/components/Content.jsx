import React, { Component } from 'react';
import Node from './Node';

class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        //  first
      }
    }

    // https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
    sleep = ms => new Promise(r => setTimeout(r, ms));

    componentDidUpdate = (prevProps) => { this.animateRows(); }

    animateRows = async() => {
        var rows = Array.from(document.body.getElementsByClassName("row"));
        console.log(rows)
        for (var row = 0; row < rows.length; row++){
            rows[row].classList.add("visible");
            rows[row].classList.remove("invisible");
            await this.sleep(50);
        }
    }


    render() {
        return (
            <div id="content">
                {
                    this.props.board.map((arr, row) => {
                        return (
                            <div className={"row invisible"}  key = {row + this.props.rule + this.props.height} id={"row" + row}> 
                                {arr.map((node, col) => {
                                    return <Node 
                                        val = {node} 
                                        row = {row}
                                        col = {col}
                                        key = {row + " " + col}
                                    />
                                })}
                            </div>   
                        )
                    })
                }
            </div>
        );
    }
}

export default Content;
