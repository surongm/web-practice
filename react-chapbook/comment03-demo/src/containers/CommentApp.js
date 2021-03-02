import React, { Component } from 'react'
import { Provider } from "react-redux"
import { createStore } from 'redux'
import CommentsReducer from '../reducers/comments'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

const store = createStore(CommentsReducer)

export default class CommentApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='wrapper'>
                    <CommentInput />
                    <CommentList />
                </div>
            </Provider>
        )
    }
}
