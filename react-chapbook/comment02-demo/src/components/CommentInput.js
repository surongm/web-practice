import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentInput extends Component {

    // 1、static开头的类属性

    static propTypes = {
        onSubmit: PropTypes.func
    }

    // 2、构造函数

    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }

    // 3、生命周期函数

    componentWillMount() {
        this._loadUsername()
    }

    componentDidMount() {
        // 焦点自动聚焦在input
        this.textarea.focus()
    }

    // 4、以 _开头的私有方法

    // 加载username的方法
    _loadUsername = () => {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({ username })
        }
    }

    _saveUsername = (username) => {
        // 把username 存储到localStorage
        localStorage.setItem('username', username)
    }

    // 5、以handle开头的监听方法

    // input失去焦点触发
    handleUsernameBlur = (e) => {
        this._saveUsername(e.target.value)
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
