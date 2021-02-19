import React, { Component } from 'react'

export default class HtmlDemo extends Component {
    constructor() {
        super()
        this.state = {
            content: '<h1>React.js 小书 </h1>'
        }
    }

    render() {
        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>HtmlDemo</h1>
                </div>

                {/* {this.state.content} */}

                <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
                {/*  __html 属性值就相当于元素的 innerHTML */}
            </div>
        )
    }
}
