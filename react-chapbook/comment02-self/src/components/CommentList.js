import React, { useEffect } from 'react'

const CommentList = (props) => {
    const { comments, onDeleteComment } = props

    const handleClickDelete = (createtime) => {
        onDeleteComment(createtime)
    }

    // useEffect(() => {
    //     if (comments.length) {
    //         for (let comment of comments) {
    //             let { textareaText } = comment
    //             if (textareaText.indexOf('`') >= 0) {
    //                 textareaText = showCodeHtml(textareaText)
    //                 console.log(textareaText)
    //             }
    //         }
    //     }
    // }, [comments.length])

    const showCodeHtml = (textareaText) => {
        let indexStart = textareaText.indexOf('`')
        let indexEnd = textareaText.slice(indexStart + 1).indexOf('`')
        let codeString = textareaText.substr(indexStart + 1, indexEnd - 1)
        let codeHtml = `<code>${codeString}</code>`
        let EndText = textareaText.slice(indexStart + 1 + indexEnd + 1)
        let result = textareaText.slice(0, indexStart) + `${codeHtml}${EndText}`
        return result

        // 未实现
        // let AllResult = EndText.indexOf('`') >= 0 ? (result + showCodeHtml(EndText)) : result
        // console.log(AllResult)
        // return AllResult
    }

    return (
        <div className='comment-list'>
            {
                comments.map((comment, index) => {
                    return (
                        <div className='list' key={index} >
                            <div className='list-name-label'>
                                <span className='list-name'>
                                    {comment.inputText}
                                </span>
                                  &nbsp; : &nbsp;&nbsp;
                            </div>
                            {/* <div className='list-comment'>
                                {comment.textareaText}
                            </div> */}
                            <div className='list-comment' dangerouslySetInnerHTML={{ __html: showCodeHtml(comment.textareaText) }} />
                            <span className='list-createtime'>{comment.timeString}</span>
                            <span className='list-delete' onClick={() => handleClickDelete(comment.createtime)} >删除</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommentList
