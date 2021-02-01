import React, { Component } from 'react'

export default class Statedemo extends Component {
    constructor() {
        super()
        this.state = {
            isLiked: false,
            count: 0
        }
    }

    handleClickOnLikeButton() {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    // 输出1
    handleClicksetState = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        }, () => {
            console.log(this.state.count)
        })
    }

    // 结果全是0
    // handleClicksetState = () => {
    //     this.setState({
    //         count: this.state + 1
    //     })
    //     console.log(this.state.count)

    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     console.log(this.state.count)

    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     console.log(this.state.count)
    // }

    // 参数是函数,可接受两个参数
    // 输出 0 0 0   3 3 3  6 6 6 
    // handleClicksetState = () => {
    //     const { count } = this.state

    //     this.setState((prevState) => {
    //         return { count: prevState.count + 1 }
    //     }, () => {
    //         console.log(count)
    //     })

    //     this.setState((prevState) => {
    //         return { count: prevState.count + 1 }
    //     }, () => {
    //         console.log(count)
    //     })

    //     this.setState((prevState) => {
    //         return { count: prevState.count + 1 }
    //     }, () => {
    //         console.log(count)
    //     })
    // }


    // 输出 3 3 3   6 6 6 
    // handleClicksetState = () => {
    //     this.setState((prevState) => {
    //         return { count: prevState.count + 1 }
    //     }, () => {
    //         console.log(this.state.count)
    //     })

    //     this.setState((prevState) => {
    //         return { count: prevState.count + 1 }
    //     }, () => {
    //         console.log(this.state.count)
    //     })

    //     this.setState((prevState) => {
    //         return { count: prevState.count + 1 }
    //     }, () => {
    //         console.log(this.state.count)
    //     })
    // }


    render() {
        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>statedemo</h1>
                </div>
                <div>
                    <button onClick={this.handleClicksetState}>setState</button>
                </div>
                <button onClick={this.handleClickOnLikeButton.bind(this)}>
                    {
                        this.state.isLiked ? '取消' : '点赞'
                    }
                    👍
                </button>
            </div>
        )
    }
}
