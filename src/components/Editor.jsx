import React, { Component } from 'react'
import Node from './Node'
import EditorNode from './EditorNode';
import RowPreview from './RowPreview';

export default class Editor extends Component {
    constructor(props) {
      super(props)
    

    //   it might be fine to modify seed directly
      this.state = {   
          mouseIsPressed: false,
          clickIndex: -1,
       }

      this.cheat = 0;
    }


    componentDidMount = () => {
        var container = document.getElementById("editor-active-container");
        // alert(container.clientWidth);
        container.scrollTo(2000 - container.clientWidth / 2, 0);
    }



    handleMouseDown = (index) => {
        console.log("mouseDown");
        this.props.seed[index] = this.props.seed[index] === 1 ? 0 : 1;
        // this.changeSeedVal(index);
        this.setState({mouseIsPressed : true, clickIndex: index});
    }

    handleMouseEnter = (index) => {
        console.log('enter');
        if (this.state.mouseIsPressed && index !== this.state.clickIndex) {        this.changeSeedVal(index)
        }
    }

    handleMouseUp = () => {
        this.setState({mouseIsPressed : false});
    }

    handleOnClick = (index) => {
        // console.log('clicl');
        // this.changeSeedVal(index);
    }

    // don't need this, just dod deafult
    clear = () => {

    }

    reset = () => {
        this.props.reset(this.props.width);
    }


    // could do compute newVal here, or in node, doesn't matter.
        // actually it might but hold on, you fool
    changeSeedVal = (index) => {
        console.log(this.props.seed[index]);
        this.props.seed[index] = this.props.seed[index] === 1 ? 0 : 1;
        this.setState({seed: this.props.seed})
    }


  render() {
    return (
        <div id="editor-popup">
            <div id="editor-area">
                <RowPreview 
                    seed = {this.props.seed} 
                />
                <div id="editor-active-container" onMouseUp={() => {
                    this.setState({mouseIsPressed:false})
                }}
                onMouseLeave={() => {

                    //TODO : also have it autoscroll when you leave and have mousepressed. The below is just temporary
                    this.setState({mouseIsPressed:false})
                }}
                >
                    <div id="editor-row">   
                        {this.props.seed.map((node, index) => {
                            return <EditorNode 
                                key = {`editor${index}${node}`}
                                val={node} 
                                bordered={true}
                                id={index ===  this.props.seed.length >> 2 ? "editor-center-node" : null}
                                index={index}
                                changeValCB={this.changeSeedVal}
                                handleMouseDown = {this.handleMouseDown}
                                handleMouseEnter = {this.handleMouseEnter}
                                handleMouseUp = {this.handleMouseUp}
                                painting = {this.state.mouseIsPressed}
                                handleOnClick = {this.handleOnClick}
                            />
                        })}
                    </div>
                </div>
            </div>
            <div id="editor-info">
                <div style={{width:"50%"}}>
                    <button id="clear-button" className='info-button' onClick={this.reset}>
                        reset to default  
                    </button>
                </div>
                <div style={{width:"50%"}}>
                    <button id="clear-button" className='info-button' onClick={this.reset}>
                        exit
                    </button>
                </div>
                
            </div>
        </div>
        
    )
  }
}
