import React, { Component } from 'react'

export default class UpdateStage extends Component {
    constructor(props) {
        super(props)
        this.listRef = React.createRef()
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        // Are we adding new items to the list?
        // Capture the scroll position so we can adjust scroll later.
        if (prevProps.list) {
            if (prevProps.list.length < this.props.list.length) {
                const list = this.listRef.current
                return list.scrollHeight - list.scrollTop
            }
        }
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        if (snapshot != null) {
            const list = this.listRef.current
            list.scrollTop = list.scrollHeight - snapshot
        }

        if (prevProps.myProps !== this.props.myProps) {
            // this.props.myProp has a different value
            // we can perform any operations that would 
            // need the new value and/or cause side-effects 
            // like AJAX calls with the new value - this.props.myProp
        }
    }

    // 卸载
    componentWillUnmount() {
        console.log('componentWillUnmount')

        // 清除 timer
        clearInterval(this.timer)
        clearTimeout(this.timer1)

        // 关闭 socket
        // this.myWebsocket.close()

        // 取消消息订阅

    }

    // 错误
    componentDidCatch() {
        console.log('componentDidCatch')
        this.setState({
            hasError: true
        })
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info);
    }

    render() {
        return (
            <div ref={this.listRef}>
                UpdateStage
            </div>
        )
    }
}
