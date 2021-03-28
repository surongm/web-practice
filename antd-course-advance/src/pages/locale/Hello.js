import React from 'react'

// ["zh-CN", "en-US", "zh", "zh-TW", "en"]
const lang = window.navigator.language

const Hello = () => {
    console.log(window.navigator, window)
    return (
        <div>
            {
                lang === 'en-US' ? 'hello world' : '你好'
            }
        </div>
    )
}

export default Hello
