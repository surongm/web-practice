import React, { Component } from 'react'

export default class CommentContent extends Component {
    constructor() {
        super()
        this.state = {
            inputText: localStorage.username || '',
            textareaText: '',
        }
    }

    componentDidMount() {
        this.textarea.focus()
    }

    handleChangeInputValue = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }

    handleChangeTextareaValue = (e) => {
        this.setState({
            textareaText: e.target.value
        })
    }

    handleBtnsubmit = () => {
        const { inputText, textareaText } = this.state
        if (inputText.trim() === "") {
            alert('请输入用户名')
            return false
        }
        if (textareaText.trim() === '') {
            alert('请输入评论内容')
            return false
        }

        let comment = {}
        comment.inputText = inputText
        comment.textareaText = textareaText
        comment.createtime = new Date().getTime()
        comment.timeString = '1秒前'
        this.props.onSubmitComment && this.props.onSubmitComment(comment)

        localStorage.username = inputText

        this.setState({
            textareaText: ''
        })
        this.textarea.focus()
    }

    render() {
        const { inputText, textareaText } = this.state
        return (
            <div className='comment-content'>
                <div className='comment-input'>
                    <span className='comment-field-name comment-input-name'>用户名：</span>
                    <input
                        className='comment-field comment-input-field'
                        value={inputText}
                        onChange={(e) => this.handleChangeInputValue(e)}
                    />
                </div>
                <div className='comment-textarea'>
                    <span className='comment-field-name comment-textarea-name'>评论内容:</span>
                    <textarea
                        className='comment-field comment-textarea-field'
                        value={textareaText}
                        onChange={this.handleChangeTextareaValue}
                        ref={(textarea) => this.textarea = textarea}
                    />
                </div>
                <div className='comment-btn'>
                    <button
                        type='submit'
                        className='comment-btn-submit'
                        onClick={this.handleBtnsubmit}
                    >
                        发布
                    </button>
                </div>
            </div>
        )
    }
}
