import React, { Component } from 'react'
import ClockMount from './ClockMount'

export default class ClockMountParent extends Component {
    constructor() {
        super()
        this.state = {
            isShowClock: true
        }
    }

    isShoweHide = () => {
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }

    render() {
        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>ClockMountParent</h1>
                </div>
                {/* <ClockMount /> */}
                {
                    this.state.isShowClock ? <ClockMount /> : null
                }
                <button onClick={this.isShoweHide}>
                    显示或者隐藏ClockMount组件
                </button>
            </div>
        )
    }
}
