import React, { Component } from 'react'
import InputWithUserName from './InputWithUserName'
import TextareaWithContent from './TextareaWithContent'

export default class HocApp extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div>
                    用户名：<InputWithUserName />
                </div>
                <div>
                    内容：<TextareaWithContent />
                </div>
            </div>
        )
    }
}
