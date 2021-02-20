import React, { Component } from 'react'
import CommentContent from './CommentContent'
import CommentList from './CommentList'

export default class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            // comments: [],
            comments: JSON.parse(localStorage.comments) || [],
        }
    }

    componentDidUpdate() {
        const { comments } = this.state
        let arr = comments
        this.timer = setInterval(() => {
            if (arr.length) {
                for (let item of arr) {
                    item.timeString = this.TimeFormatting(item)
                    // console.log(item)
                }
            }
            this.setState({
                comments: arr
            })

            localStorage.comments = JSON.stringify(arr)
            // console.log(JSON.parse(localStorage.comments))
        }, 5000)

    }

    handleSubmitComment = (comment) => {
        // console.log(comment)
        // comment = this.TimeFormatting(comment)
        const { comments } = this.state
        let arr = comments
        if (arr.length) {
            for (let item of arr) {
                item.timeString = this.TimeFormatting(item)
                // console.log(item)
            }
        }

        arr.push(comment)
        this.setState({
            comments: arr
        })
    }

    TimeFormatting(item) {
        let { createtime, timeString } = item
        let currentTime, second, minute;

        currentTime = new Date().getTime()
        let differ = (currentTime - createtime) / 1000
        second = parseInt(differ % 60)
        if (differ > 59) {
            minute = parseInt(differ / 60)
            timeString = (second === 0) ? `${minute}分钟前` : `${minute}分钟${second}秒前`
        }
        if (differ > 0) {
            timeString = `${second}秒前`
        }
        return timeString
    }

    handleDeleteComment = (createtime) => {
        // console.log(createtime)
        const { comments } = this.state
        let arr = comments
        if (arr.length) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].createtime == createtime) {
                    arr.splice(i, 1)
                }
            }
        }

        this.setState({
            comments: arr
        })
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const { comments } = this.state
        return (
            <div className='comment-app'>
                <CommentContent
                    onSubmitComment={this.handleSubmitComment}
                />
                <CommentList
                    comments={comments}
                    onDeleteComment={this.handleDeleteComment}
                />
            </div>
        )
    }
}
