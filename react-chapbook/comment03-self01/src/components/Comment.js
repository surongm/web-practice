import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        index: PropTypes.number,
        comments: PropTypes.array
    }

    componentWillMount() {
        this._updateTimeString()
        // 每5秒更新一次
        this.timer = setInterval(
            // 需要bind
            this._updateTimeString.bind(this),
            5000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    // 处理时间
    _updateTimeString = () => {
        const { index, comment, onUpdateTimeString } = this.props
        // Date.now() 获取当前时间
        const duration = (+Date.now() - comment.createdTime) / 1000

        let timeString = duration > 60
            ? `${Math.round(duration / 60)}分钟前`
            : `${Math.round(Math.max(duration, 1))}秒前`

        if (onUpdateTimeString) {
            onUpdateTimeString(index, timeString)
        }
    }

    // 防止XSS
    _getProcessedContent = (content) => {
        // 前 5 个 replace 实际上是把类似于 <、> 这种内容替换转义一下，
        // 防止用户输入 HTML 标签。最后一行代码才是实现功能的代码
        let result = content
        if (result) {
            result.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;')
                .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
        }
        return result
    }

    handleDeleteComment = () => {
        const { onDeleteComment, index, comments } = this.props
        if (onDeleteComment) {
            onDeleteComment(index)
        }

        let arr = [...comments]
        arr.splice(index, 1)
        localStorage.setItem('comments', JSON.stringify(arr))
    }

    render() {
        const { comment } = this.props
        return (
            <div className='comment'>
                <div className="comment-user">
                    <span>{comment.username}</span> :
                </div>
                {/* <p>
                    {comment.content}
                </p> */}
                <p dangerouslySetInnerHTML={{ __html: this._getProcessedContent(comment.content) }} />
                <span className='comment-createdtime'>
                    {comment.timeString}
                </span>
                <span
                    className='comment-delete'
                    onClick={this.handleDeleteComment}
                >
                    删除
                </span>
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
        onUpdateTimeString: (index, timeString) => {
            dispatch({
                type: 'UPDATE_TIMESTRING',
                index,
                timeString,
            })
        },
        onDeleteComment: (index) => {
            dispatch({
                type: 'DELETE_COMMENT',
                index
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
