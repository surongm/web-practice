import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class CommentInput extends Component {

    // 1、static开头的类属性

    static propTypes = {
        username: PropTypes.string,
        content: PropTypes.string,
        onChangeUsername: PropTypes.func,
        onChangeContent: PropTypes.func,
        onAddComment: PropTypes.func
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
        const { onChangeUsername } = this.props
        const username = localStorage.getItem('username')
        if (onChangeUsername) {
            onChangeUsername(username)
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
        const { onChangeUsername } = this.props
        if (onChangeUsername) {
            onChangeUsername(e.target.value)
        }
    }

    // textarea受控
    handleContentChange = (e) => {
        const { onChangeContent } = this.props
        if (onChangeContent) {
            onChangeContent(e.target.value)
        }
    }

    // 点击提交按钮
    handleSubmit = () => {
        const { onAddComment, username, content, onChangeContent, comments } = this.props
        if (!username) return alert('请输入用户名')
        if (!content) return alert('请输入评论内容')

        let comment = {
            username,
            content,
            createdTime: +new Date(),
            timeString: ''
            // createdTime: +new Date().getTime()
        }
        if (onAddComment) {
            onAddComment(comment)
        }

        let arr = [...comments, comment]
        localStorage.setItem('comments', JSON.stringify(arr))

        if (onChangeContent) {
            onChangeContent('')
        }
    }

    // 6、render()方法

    render() {
        const { username, content } = this.props
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

const mapStateToProps = (state) => {
    return {
        username: state.username,
        content: state.content,
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeUsername: (username) => {
            dispatch({
                type: 'CHANGE_USERNAME',
                username
            })
        },
        onChangeContent: (content) => {
            dispatch({
                type: 'CHANGE_CONTENT',
                content
            })
        },
        onAddComment: (comment) => {
            dispatch({
                type: 'ADD_COMMENT',
                comment
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput)
