import React, { Component } from 'react'

export default class TestProps extends Component {
    constructor() {
        super()
        this.state = {
            isLiked: false
        }
    }

    handleClickOnLikeButton = () => {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.unhappyText === nextProps.unhappyText) {
            return false
        }
        if (this.props.unhappyText === nextProps.unhappyText) {
            return false
        }

        // 暂时没有用 
        // if (this.state.isLiked === nextState.isLiked) {
        //     return false
        // }

        // 只有不相等时 返回true 渲染
        return true
    }

    componentDidUpdate() {
        console.log('TestProps')
    }

    render() {
        // props 为对象
        const { happyText, unhappyText } = this.props

        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>TestProps</h1>
                </div>
                <button onClick={this.handleClickOnLikeButton}>
                    {this.state.isLiked ? happyText : unhappyText} 👍
                </button>
            </div>
        )
    }

    // 设置默认props
    static defaultProps = {
        happyText: '开心',
        unhappyText: '难过'
    }

}
