import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import { initComments, deleteComment } from '../reducers/comments'

class CommentListContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        initComments: PropTypes.func,
        onDeleteComment: PropTypes.func
    }

    componentWillMount() {
        // componentWillMount 生命周期中初始化评论
        this._loadComments()
    }

    _loadComments() {
        // 从 LocalStorage 中加载评论
        let comments = localStorage.getItem('comments')
        comments = comments ? JSON.parse(comments) : []
        // this.props.initComments 是 connect 传进来的
        // 可以把数据初始化到 state 里去
        this.props.initComments(comments)
    }

    handleDeleteComment = (index) => {
        const { comments, onDeleteComment } = this.props
        // props 是不能变的，所以这里新建一个删除特定下标的评论列表
        const newComments = [
            ...comments.slice(0, index),
            ...comments.slice(index + 1)
        ]
        // 保存最新的评论列表到 LocalStorage
        localStorage.setItem('comments', JSON.stringify(newComments))

        // this.props.onDeleteComments 是 connect 传进来的
        // 会 dispatch 一个 action 去删除评论
        if (onDeleteComment) {
            onDeleteComment(index)
        }
    }

    render() {
        return (
            <CommentList
                comments={this.props.comments}
                onDeleteComment={this.handleDeleteComment}
            />
        )
    }
}

// 评论从 state.comments 中获取
const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // 初始化 state
        initComments: (comments) => {
            dispatch(initComments(comments))
        },
        // 删除评论
        onDeleteComment: (commentIndex) => {
            dispatch(deleteComment(commentIndex))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)
