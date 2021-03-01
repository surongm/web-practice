import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
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
                            />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList)
