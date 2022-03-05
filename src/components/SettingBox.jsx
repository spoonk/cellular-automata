import React, { Component } from 'react'

export default class SettingBox extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        value: props.def,
      }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.cb(this.state.value);
    }

    handleChange = (e) => {
        this.setState({value: e.target.value}, () => this.props.cb(this.state.value));
    }

    render() {
        return (
            <div className='setting-box'>
                <div className="name">
                    {this.props.name}
                    {this.props.toggle ? <button className="toggle-button" onClick={this.props.toggle}>  ?   </button>:<></>}
                </div>
                <p className="description">
                    {
                        !(Array.isArray(this.props.description))? 
                        this.props.description
                        :
                        this.props.description.map(sentence => {
                            return <p style={{paddingBottom: "10px"}}>{sentence}</p>
                        })                        
                    }
                </p>
                <form onSubmit = {this.handleSubmit} >
                    <input 
                        className="setting-input"
                        type="number" 
                        value={this.state.value} 
                        onChange={this.handleChange}
                    ></input>
                </form>
                <p className="input-range">
                    integer between {this.props.min} and {this.props.max}
                </p>
            </div>
        )
    }
}
