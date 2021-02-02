import React from 'react'

const CommentList = (props) => {
    const { comments } = props
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
                            <div className='list-comment'>
                                {comment.textareaText}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommentList
