import React, { Component } from 'react'
import wrapWithLoadData from './wrapWithLoadData'

class InputWithUserName extends Component {
    render() {
        // let data = JSON.parse(this.props.data)
        return (
            // <input value={data} />
            <input value={this.props.data} />
        )
    }
}

InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')

export default InputWithUserName
