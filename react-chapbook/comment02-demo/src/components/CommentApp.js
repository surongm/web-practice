import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }

    // componentWillMount() {
    //     this._loadComments()
    // }

    componentDidMount() {
        this._loadComments()
    }

    _loadComments = () => {
        let comments = localStorage.getItem('comments')
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({ comments })
        }
    }

    _saveComments = (comments) => {
        // json转化为字符串
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    handleSubmitComment = (comment) => {
        // console.log(comment)

        if (!comment) return;
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')

        let arr = [...this.state.comments]
        arr.push(comment)
        this.setState({
            comments: arr
        })

        this._saveComments(arr)
    }

    handleDeleteComment = (index) => {
        // console.log(index)
        const { comments } = this.state
        comments.splice(index, 1)
        this.setState({ comments })
        this._saveComments(comments)
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmitComment}
                />
                <CommentList
                    comments={this.state.comments}
                    onDeleteComment={this.handleDeleteComment}
                />
            </div>
        )
    }
}
