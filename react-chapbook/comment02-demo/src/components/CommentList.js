import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

export default class CommentList extends Component {
    static propTypes = {
        comment: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    handleDeleteComment = (index) => {
        const { onDeleteComment } = this.props
        if (onDeleteComment) {
            onDeleteComment(index)
        }
    }

    render() {
        const { comments } = this.props
        return (
            <div>
                {
                    comments.map((comment, i) => {
                        return (
                            <Comment
                                comment={comment}
                                key={i}
                                index={i}
                                onDeleteComment={this.handleDeleteComment}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
