import React, { Component } from 'react'

export default class UnmountComp extends Component {
    constructor() {
        super()
        console.log('constructor')
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')
        return (
            <div>
                UnmountComp
            </div>
        )
    }
}
