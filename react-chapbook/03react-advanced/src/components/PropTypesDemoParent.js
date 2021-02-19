import React, { Component } from 'react'
import PropTypesDemo from './PropTypesDemo'

export default class PropTypesDemoParent extends Component {
    render() {
        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>PropTypesDemoParent</h1>
                </div>
                {/* <PropTypesDemo /> */}
                {/* <PropTypesDemo comment={1} /> */}
                <PropTypesDemo comment={{ username: '张三', content: '测试内容' }} />
            </div>
        )
    }
}
