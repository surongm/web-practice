import React, { Component } from 'react'

export default class LoadStage extends Component {
    // ① 构造函数
    constructor(props) {
        super(props)
        this.state = {
            color: '#fff',
            isScrollingDown: false,
            lastRow: null
        }

        // 绑定this 方法一
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     console.log(this)  //未绑定 undefined
    // } 

    // 绑定this 方法三 箭头函数
    handleClick = () => {
        console.log('click', this)
    }

    // 已废弃
    // componentWillReceiveProps(nextProps) {
    //     if (this.props.currentRow !== nextProps.currentRow) {
    //         // 有变化后更新state
    //         this.setState({
    //             isScrollingDown: nextProps.currentRow > this.props.currentRow
    //         })
    //     }
    //     this.loadAsyncData()
    // }

    // getDerivedStateFromProps是一个static方法，意味着拿不到实例的this
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps')
        if (nextProps.currentRow !== prevState.lastRow) {
            return {
                isScrollingDown: nextProps.currentRow > prevState.lastRow,
                lastRow: nextProps.currentRow
            }
        }
        // 默认不修改 state
        return null
    }

    componentDidUpdate() {
        // 仅仅在更新阶段 请求数据
        this.loadAsyncData()
    }

    loadAsyncData = () => {

    }

    componentDidMount() {
        console.log('componentDidMount')
        fetch('https://api.github.com/search/repositories?q=language:java&sort=stars')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    items: result.items
                })
            })
            .catch((error) => {
                console.log(error)
            })

        // 不要直接更新state
        // this.setState({})
    }

    render() {
        return (
            <div>
                LoadStage
                <button onClick={this.handleClick} >测试点击事件</button>
                {/* 绑定this 方法二 */}
                {/* <button onClick={this.handleClick.bind(this)} >测试点击事件</button> */}
            </div>
        )
    }
}
