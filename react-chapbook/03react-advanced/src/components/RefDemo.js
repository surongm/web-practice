import React, { Component } from 'react'

export default class RefDemo extends Component {
    componentDidMount() {
        this.input.focus()
    }

    render() {
        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>RefDemo</h1>
                </div>
                <input ref={(input) => this.input = input} />
            </div>
        )
    }
}
