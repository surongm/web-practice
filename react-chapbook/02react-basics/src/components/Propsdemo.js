import React, { Component } from 'react'

export default class Propsdemo extends Component {
    constructor() {
        super()
        this.state = {
            isLiked: false
        }
    }

    handleClickOnLikeButton = () => {
        this.state({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        let likedText = this.props.likedText || '取消'
        let unlikedText = this.props.unlikedText || '点赞'
        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>propsdemo</h1>
                </div>
                <button onClick={this.handleClickOnLikeButton}>
                    {this.state.isLiked ? likedText : unlikedText}
                </button>
            </div>
        )
    }
}
