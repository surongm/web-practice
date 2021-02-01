import React, { Component } from 'react'
import ImmutableProps from './ImmutableProps'
import TestProps from './TestProps'

export default class ImmutablePropsParent extends Component {
    constructor() {
        super()
        this.state = {
            likedText: "已赞",
            unlikedText: '赞',
            happyText: '开心',
            unhappyText: '难过'
        }
    }

    handleClickOnChange = () => {
        this.setState({
            likedText: '取消',
            unlikedText: '点赞'
        })
    }

    handleClickChange = () => {
        this.setState({
            happyText: '不开心',
            unhappyText: '不难过'
        })
    }

    render() {
        const { likedText, unlikedText, happyText, unhappyText } = this.state
        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>ImmutablePropsParent</h1>
                </div>
                {/* <ImmutableProps  {...this.state} /> */}
                <ImmutableProps likedText={likedText} unlikedText={unlikedText} />
                <TestProps happyText={happyText} unhappyText={unhappyText} />

                {/* props 决定的显示形态不能被修改。组件的使用者可以主动地通过重新渲染的方式把新的 props 传入组件当中 */}
                <button onClick={this.handleClickOnChange}>
                    修改 ImmutableProps
                </button>

                <button onClick={this.handleClickChange}>
                    修改 TestProps
                </button>
            </div>
        )
    }
}
