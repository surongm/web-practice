import React, { Component } from 'react'
import PropTypes from 'prop-types'
import wrapWithLoadData from './wrapWithLoadData'

class CommentInput extends Component {

    // 1、static开头的类属性

    static propTypes = {
        onSubmit: PropTypes.func,
        data: PropTypes.any,
        saveData: PropTypes.func.isRequired
    }

    // 2、构造函数

    constructor(props) {
        super(props)
        this.state = {
            username: props.data || '',
            content: ''
        }
    }

    // 3、生命周期函数

    componentDidMount() {
        // 焦点自动聚焦在input
        this.textarea.focus()
    }

    // 5、以handle开头的监听方法

    // input失去焦点触发
    handleUsernameBlur = (e) => {
        this.props.saveData(e.target.value)
    }

    // input 受控
    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    // textarea受控
    handleContentChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    // 点击提交按钮
    handleSubmit = () => {
        if (this.props.onSubmit) {
            const { username, content } = this.state
            this.props.onSubmit({
                username,
                content,
                createdTime: +new Date()
                // createdTime: +new Date().getTime()
            })
        }
        this.setState({
            content: ''
        })
    }

    // 6、render()方法

    render() {
        const { username, content } = this.state
        console.log(username)
        return (
            <div className='comment-input'>
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input
                            value={username}
                            onBlur={this.handleUsernameBlur}
                            onChange={this.handleUsernameChange}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容:</span>
                    <div className="comment-field-input">
                        <textarea
                            ref={(textarea) => this.textarea = textarea}
                            value={content}
                            onChange={this.handleContentChange}
                        />
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

CommentInput = wrapWithLoadData(CommentInput, 'username')

export default CommentInput
