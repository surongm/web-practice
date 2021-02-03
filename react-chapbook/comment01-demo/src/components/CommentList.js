import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    render() {
        const { comments } = this.props
        return (
            <div>
                {
                    comments.map((comment, i) => {
                        return (
                            <Comment comment={comment} key={i} />
                        )
                    })
                }
            </div>
        )
    }

    static defaultProps = {
        comments: []
    }
}
