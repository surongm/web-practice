import React, { Component } from 'react'

export default class ImmutableProps extends Component {
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

    componentDidUpdate() {
        console.log('ImmutableProps')
    }

    render() {
        // props 为对象
        const { likedText, unlikedText } = this.props
        console.log('ImmutableProps')
        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>ImmutableProps</h1>
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
