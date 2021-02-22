import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }

    constructor() {
        super()
        this.state = {
            timeString: ''
        }
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
        const comment = this.props.comment
        // Date.now() 获取当前时间
        const duration = (+Date.now() - comment.createdTime) / 1000

        let timeString = duration > 60
            ? `${Math.round(duration / 60)}分钟前`
            : `${Math.round(Math.max(duration, 1))}秒前`

        this.setState({
            timeString
        })
    }

    // _getProcessedContent = (content) => {
    //     // ①\s是指空白bai，包括空格、换行、dutab缩进等所有的空白，而\S刚好相反，这样一正一反下来，就表示所有的字符，完全的，一字不漏的。
    //     // ②中括号[] 表示范围 其中的任意一个
    //     // ③？ 贪婪模式和费贪婪模式
    //     // ④$1
    //     let result = content.replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    //     return result
    // }

    // 防止XSS
    _getProcessedContent = (content) => {
        // 前 5 个 replace 实际上是把类似于 <、> 这种内容替换转义一下，
        // 防止用户输入 HTML 标签。最后一行代码才是实现功能的代码
        let result = content.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;')
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
        return result
    }

    handleDeleteComment = () => {
        const { onDeleteComment, index } = this.props
        if (onDeleteComment) {
            onDeleteComment(index)
        }
    }

    render() {
        const { comment } = this.props
        const { timeString } = this.state
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
                    {timeString}
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
