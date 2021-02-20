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
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmitComment}
                />
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}
