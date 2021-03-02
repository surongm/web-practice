import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comments'

class CommentInputContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onSubmit: PropTypes.func
    }

    constructor() {
        super()
        this.state = {
            username: ''
        }
    }

    componentWillMount() {
        //  componentWillMount 生命周期中初始化用户名
        this._loadUsername()
    }

    _loadUsername() {
        // 从 localStorage 加载 username
        // 然后可以在 render 方法中传给 CommentInput
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({
                username
            })
        }
    }

    _saveUsername = (username) => {
        // 看看 render 方法的 onUserNameInputBlur
        // 这个方法会在用户输入框 blur 的时候被调用，保存用户名 
        localStorage.setItem('username', username)
    }

    handleSubmitComment = (comment) => {
        // 评论数据的验证
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')

        // 新增评论保存到 LocalStorage 中
        const { comments, onSubmit } = this.props
        console.log(comments, comment)
        const newComments = [...comments, comment]
        localStorage.setItem('comments', JSON.stringify(newComments))

        // connect传进来的onSubmit
        // 会 dispatch 一个 action 去新增评论
        if (onSubmit) {
            onSubmit(comment)
        }
    }

    render() {
        return (
            <CommentInput
                username={this.state.username}
                onUserNameInputBlur={this._saveUsername}
                onSubmit={this.handleSubmitComment}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (comment) => {
            dispatch(addComment(comment))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInputContainer)
