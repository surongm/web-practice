import React, { Component } from 'react'

export default class Eventdemo extends Component {
    // constructor() {
    //     super()
    //     this.handleClickOnTitle = this.handleClickOnTitle.bind(this)
    // }

    // handleClickOnTitle() {
    //     console.log(this)
    // }

    // 箭头函数都可以打印出Eventdemo
    // handleClickOnTitle = () => {
    //     console.log(this)
    // }

    // 自动获取到 e 对象属性
    handleClickOnTitle(e) {
        console.log(e.target.innerHTML)
    }


    // 传参
    // handleClickSentArgs(word) {
    //     console.log(word)
    // }

    handleClickSentArgs = (word) => {
        console.log(word)
    }

    render() {
        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>eventdemo</h1>
                </div>
                {/* undefined */}
                <h4 onClick={this.handleClickOnTitle}>
                    {/* Eventdemo */}
                    {/* <h4 onClick={this.handleClickOnTitle.bind(this)}> */}
                    {/* Eventdemo */}
                    {/* <h4 onClick={() => this.handleClickOnTitle()}> */}
                    React 小书
                </h4>

                {/* 传参 */}
                <h4 onClick={this.handleClickSentArgs.bind(this, 'hello')}>传参</h4>
                <h4 onClick={() => this.handleClickSentArgs('hello')} >传参(箭头函数)</h4>
            </div>
        )
    }
}
