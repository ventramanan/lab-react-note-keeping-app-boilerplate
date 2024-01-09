import React, { Component } from 'react'

export default class Editor extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            value: ""
        };
        
    }
    handleChange(e){
        this.setState({value:e.target.value})
    }
  render() {
    return (
      <div className='container'>
        <div className='input'>
            <h3 className='in'>Input</h3>
            <textarea className='Input-text' onChange={this.handleChange} defaultValue={this.state.value} />
        </div>
            <div>
                <div className='output'>
                    <h3 className='pro'>Pro note</h3>
                    <div  className='output-text'>{this.state.value}</div>
                </div>
            </div>
        </div>
      
    )
  }
}

