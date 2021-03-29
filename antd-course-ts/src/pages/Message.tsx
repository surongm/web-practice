import React, { Component } from 'react'

interface MessageProps {
    message: string
}

interface MessageState {
    count: number
}

export default class Message extends Component<MessageProps, MessageState> {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment = () => {
        const { count } = this.state
        this.setState({
            count: count + 1
        })
    }

    render() {
        return (
            <div onClick={this.increment}>
                {this.props.message}
                {this.state.count}
            </div>
        )
    }
}
