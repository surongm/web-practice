import React, { Component } from 'react'
import CommentContent from './CommentContent'
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
        let arr = this.state.comments
        arr.push(comment)
        this.setState({
            comments: arr
        })
    }

    render() {
        const { comments } = this.state
        return (
            <div className='comment-app'>
                <CommentContent
                    onSubmitComment={this.handleSubmitComment}
                />
                <CommentList
                    comments={comments}
                />
            </div>
        )
    }
}
