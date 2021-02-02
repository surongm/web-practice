import React, { Component } from 'react'

export default class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleContentChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = () => {
        
    }

    render() {
        const { username, content } = this.state
        return (
            <div className='comment-input'>
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input value={username} onChange={this.handleUsernameChange} />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容:</span>
                    <div className="comment-field-input">
                        <textarea value={content} onChange={this.handleContentChange} />
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}
