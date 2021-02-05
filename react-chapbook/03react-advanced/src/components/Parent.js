import React, { Component } from 'react'
import UnmountComp from './UnmountComp'

export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            isShowComp: true
        }
    }

    isShoweHide = () => {
        this.setState({
            isShowComp: !this.state.isShowComp
        })
    }

    render() {
        return (
            <div>
                {/* <UnmountComp /> */}
                {
                    this.state.isShowComp ? <UnmountComp /> : null
                }
                <button onClick={this.isShoweHide}>
                    显示或者隐藏UnmountComp组件
                </button>
            </div>
        )
    }
}
