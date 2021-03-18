import React, { Component } from 'react'
import InputDemo from './InputDemo'

export default class index extends Component {
    state = {
        text: ''
    }

    onTextChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            text: e.target.value
        })
    }

    onTextReset = () => {
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div>
                <InputDemo value={this.state.text} onChange={this.onTextChange} />
                <button onClick={this.onTextReset}>Reset</button>
            </div>
        )
    }
}