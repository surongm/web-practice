import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    componentDidMount() {
        this._loadComments()
    }

    _loadComments = () => {
        const { onLoadComments } = this.props
        let comments = localStorage.getItem('comments')
        if (onLoadComments) {
            comments = JSON.parse(comments) || []
            onLoadComments(comments)
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput />
                <CommentList />
            </div>
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
        onLoadComments: (comments) => {
            dispatch({
                type: 'LOAD_COMMENTS',
                comments
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentApp)
