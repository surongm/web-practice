import React, { Component } from 'react'

export default class DefaultPropsdemo extends Component {
    // 位置随意放置
    // static defaultProps = {
    //     likedText: '取消',
    //     unlikedText: '点赞'
    // }

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

    render() {
        // props 为对象
        const { likedText, unlikedText } = this.props

        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>DefaultPropsdemo</h1>
                </div>
                <button onClick={this.handleClickOnLikeButton}>
                    {this.state.isLiked ? likedText : unlikedText} 👍
                </button>
            </div>
        )
    }

    // 设置默认props
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }

}
