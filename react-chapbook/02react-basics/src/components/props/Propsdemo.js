import React, { Component } from 'react'

export default class Propsdemo extends Component {
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

        // props 有函数
        if (this.props.onClick) {
            this.props.onClick()
        }
    }

    render() {
        // props 为字符串
        // let likedText = this.props.likedText || '取消'
        // let unlikedText = this.props.unlikedText || '点赞'

        // props 为对象
        let wordings = this.props.wordings || {
            likedText: '取消',
            unlikedText: '点赞'
        }
        const { likedText, unlikedText } = wordings

        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>propsdemo</h1>
                </div>
                <button onClick={this.handleClickOnLikeButton}>
                    {this.state.isLiked ? likedText : unlikedText} 👍
                </button>
            </div>
        )
    }
}
