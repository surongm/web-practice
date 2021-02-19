import React, { Component } from 'react'

export default class ClockMount extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    // 可以写请求数据代码
    // componentDidMount() {
    //     ajax.get('http://json-api.com/user', (userData) => {
    //        this.setState({ userData })
    //     })
    // }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    // 清除时钟
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <h1>
                    <p>现在的时间是：</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}
